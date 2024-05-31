import React, { FC } from "react";

import SlideOver from "../slideOver/SlideOver";
import { Button } from "../button";
import { Accordion } from "../accordion";
import { CheckboxInput } from "../checkboxInput";
import {
  SlideOverFooter,
  SlideOverFooterRight,
  SlideOverHeader,
} from "./SlideOverFilters.styles";

type FilterCheckboxOptions = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (filters: Record<string, string[]>) => void;
};

export type FilterOptions = {
  header: string;
  isSearchAble: boolean;
  isAccordionOpen: boolean;
  checkboxOptions: FilterCheckboxOptions[];
  onChangeCallback: () => void;
};

type SlideOverFiltersProps = {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  filtersOptions?: FilterOptions[];
  resetButtonLabel?: string;
  applyButtonLabel?: string;
  closeButtonLabel?: string;
  onCloseHandler?: () => void;
  onApplyHandler?: () => void;
  onResetHandler?: () => void;
  width?: string;
};

const SlideOverFilters: FC<SlideOverFiltersProps> = ({
  title = "Filters Templates",
  filtersOptions = [],
  isOpen,
  resetButtonLabel = "Clear Selection",
  applyButtonLabel = "Filter",
  closeButtonLabel = "Close",
  onCloseHandler = () => {},
  onApplyHandler = () => {},
  onResetHandler = () => {},
  width = "25rem",
}) => {
  const [filters, setFilters] = React.useState<Record<string, string[]>>(
    filtersOptions.reduce(
      (acc, curr) => {
        const optionFilters = curr.checkboxOptions.reduce(
          (checkboxAcc, checkboxOption) => {
            if (checkboxOption.checked) {
              checkboxAcc[checkboxOption.name] = [
                ...(checkboxAcc[checkboxOption.name] || []),
                checkboxOption.value,
              ];
            } else {
              checkboxAcc[checkboxOption.name] = (
                checkboxAcc[checkboxOption.name] || []
              ).filter((option) => option !== checkboxOption.value);
            }
            return checkboxAcc;
          },
          {} as Record<string, string[]>,
        );
        return { ...acc, ...optionFilters };
      },
      {} as Record<string, string[]>,
    ),
  );

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    cb?: (filters: Record<string, string[]>) => void,
  ) => {
    const { name, checked, value } = event.target;
    const newFilters = {
      ...filters,
      [name]: checked
        ? filters[name]
          ? [...filters[name], value]
          : [value]
        : filters[name]?.filter((v) => v !== value),
    };
    setFilters(newFilters);
    cb && cb(newFilters);
  };

  return (
    <SlideOver width={width} isOpen={isOpen} onClose={onCloseHandler}>
      <SlideOverHeader>{title}</SlideOverHeader>

      {filtersOptions.map((accordionItem, index) => (
        <Accordion
          key={index}
          isSearchAble={accordionItem.isSearchAble}
          isAccordionOpen={accordionItem.isAccordionOpen}
        >
          <Accordion.Header key={`${index}-header`}>
            {accordionItem.header}
          </Accordion.Header>
          <Accordion.Content
            key={`${index}-content`}
            onChangeCallback={accordionItem.onChangeCallback}
          >
            {accordionItem.checkboxOptions.map(
              (checkboxOption, optionIndex) => (
                <CheckboxInput
                  $inputSize="xs"
                  name={checkboxOption.name}
                  key={`${index}-${optionIndex}`}
                  label={checkboxOption.label}
                  value={checkboxOption.value}
                  onChange={(e) =>
                    handleCheckBoxChange(e, checkboxOption.onChange)
                  }
                  checked={filters[checkboxOption.name].includes(
                    checkboxOption.value,
                  )}
                ></CheckboxInput>
              ),
            )}
          </Accordion.Content>
        </Accordion>
      ))}

      <SlideOverFooter>
        <Button variant="secondary" onClick={onResetHandler}>
          {resetButtonLabel}
        </Button>

        <SlideOverFooterRight>
          <Button variant="primary" onClick={onApplyHandler}>
            {applyButtonLabel}
          </Button>
          <Button variant="secondary" onClick={onCloseHandler}>
            {closeButtonLabel}
          </Button>
        </SlideOverFooterRight>
      </SlideOverFooter>
    </SlideOver>
  );
};

export default SlideOverFilters;
