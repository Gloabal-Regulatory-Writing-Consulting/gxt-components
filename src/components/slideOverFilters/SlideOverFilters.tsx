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
  onChange?: () => void;
};

type FilterOptions = {
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
                  onChange={checkboxOption.onChange}
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
