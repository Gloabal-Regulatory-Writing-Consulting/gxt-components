import React from "react";
import {
  SwitchContainer,
  SwitchLabel,
  SwitchInput,
  SwitchSlider,
} from "./Switch.styles";

export type SwitchProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onColor?: string;
  offColor?: string;
  isDisabled?: boolean;
};

const Switch = ({
  checked,
  onChange,
  isDisabled = false,
  onColor = "var(--primary-200, #177ba6)",
  offColor = "var(--system-50, #fff);",
}: SwitchProps) => {
  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
          oncolor={onColor}
          disabled={isDisabled}
        />
        <SwitchSlider
          offcolor={offColor}
          checked={checked}
          disabled={isDisabled}
        />
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default Switch;
