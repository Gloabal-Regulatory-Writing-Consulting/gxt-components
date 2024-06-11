import React, { ChangeEvent, useState } from "react";
import {
  Caption,
  Heading,
  InnerRectangle,
  InputContainer,
  RectangleContainer,
  TextAreaContainer,
  TextAreaInput,
} from "./TextArea.styles";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name?: string;
  heading?: string;
  caption?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  heading,
  caption,
  placeholder,
  className = "",
  disabled,
  ...rest
}) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextAreaContainer className={className}>
      {heading && <Heading disabled={disabled}>{heading}</Heading>}
      <InputContainer isFocused={isFocused} disabled={disabled}>
        <TextAreaInput
          {...rest}
          id={id || "textarea"}
          name={name || "textarea"}
          value={text}
          onChange={handleTextChange}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          disabled={disabled}
        />
        <RectangleContainer showPlaceholder={text.length === 0}>
          <InnerRectangle />
        </RectangleContainer>
      </InputContainer>
      {caption && <Caption>{caption}</Caption>}
    </TextAreaContainer>
  );
};

export default TextArea;
