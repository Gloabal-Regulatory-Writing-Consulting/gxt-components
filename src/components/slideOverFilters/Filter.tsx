import { memo } from "react";
import { Accordion } from "../accordion";
import { CheckboxInput } from "../checkboxInput";
import { FilterOptions } from "./SlideOverFilters";

const Filter = ({
  header,
  checkboxOptions,
  isSearchAble,
  isAccordionOpen,
  onChangeCallback,
  filters,
  handleCheckBoxChange,
}: FilterOptions & {
  handleCheckBoxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    fn?: (filters: Record<string, string[]>) => void,
  ) => void;
  filters: Record<string, string[]>;
}) => {
  return (
    <Accordion isSearchAble={isSearchAble} isAccordionOpen={isAccordionOpen}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Content onChangeCallback={onChangeCallback}>
        {checkboxOptions.map((checkboxOption, optionIndex) => (
          <CheckboxInput
            $inputSize="xs"
            name={checkboxOption.name}
            key={`${checkboxOption.name}-${optionIndex}`}
            label={checkboxOption.label}
            value={checkboxOption.value}
            onChange={(e) => handleCheckBoxChange(e, checkboxOption.onChange)}
            checked={(filters[checkboxOption.name] || []).includes(
              checkboxOption.value?.toString(),
            )}
          ></CheckboxInput>
        ))}
      </Accordion.Content>
    </Accordion>
  );
};

export default memo(Filter);
