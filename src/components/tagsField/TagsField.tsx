import { Badge } from "../badge";
import { TagsFieldContainer } from "./TagsField.styles";

export type TagsFieldProps<T> = {
  disabled?: boolean;
  onClick?: () => void;
  value?: { label: string; value: T }[];
};
const TagsField = <T,>(props: TagsFieldProps<T>) => {
  const { value = [], disabled = false, onClick = () => {} } = props;

  const renderTags = () => {
    return value.map((item, index) => (
      <Badge
        key={index}
        type={disabled ? "disabled" : "basic"}
        label={item.label}
      />
    ));
  };

  return (
    <TagsFieldContainer
      role="input"
      disabled={disabled}
      onClick={disabled ? () => {} : onClick}
    >
      {renderTags()}
    </TagsFieldContainer>
  );
};

export default TagsField;
