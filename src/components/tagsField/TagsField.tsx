import { HTMLAttributes } from "react";
import { Badge } from "../badge";
import {
  HelpText,
  Placeholder,
  StyledLabel,
  StyledWrapper,
  TagsFieldContainer,
} from "./TagsField.styles";

export type TagsFieldProps<T> = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  onClick?: () => void;
  value?: { label: string; value: T }[];
  error?: boolean;
  helpText?: React.ReactNode;
  label?: string;
  id?: string;
  placeholder?: string;
};
const TagsField = <T,>(props: TagsFieldProps<T>) => {
  const {
    value = [],
    disabled = false,
    onClick = () => {},
    error = false,
    label,
    placeholder,
    ...rest
  } = props;

  const renderTags = () => {
    return value.map((item) => (
      <Badge
        key={item.label}
        type={disabled ? "disabled" : "basic"}
        label={item.label}
      />
    ));
  };

  return (
    <StyledWrapper error={error} {...rest}>
      {label && (
        <StyledLabel
          htmlFor={props.id || label}
          data-testid={props.id || label}
          aria-label={label}
          error={error}
        >
          {label}
        </StyledLabel>
      )}
      <TagsFieldContainer
        role="input"
        id={props.id || label}
        disabled={disabled}
        onClick={disabled ? () => {} : onClick}
        error={error}
      >
        {value.length === 0 && !disabled && placeholder && (
          <Placeholder>{placeholder}</Placeholder>
        )}
        {renderTags()}
      </TagsFieldContainer>
      {props.helpText && <HelpText error={error}>{props.helpText}</HelpText>}
    </StyledWrapper>
  );
};

export default TagsField;
