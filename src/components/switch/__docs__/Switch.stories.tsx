import { Meta } from "@storybook/react";
import Switch, { SwitchProps } from "../Switch";
import React, { useState } from "react";

export default {
  title: "Switch",
  component: Switch,
} as Meta<typeof Switch>;

export const SwitchExample = ({
  checked,
  onChange,
  isDisabled,
  onColor,
  offColor,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  return (
    <Switch
      checked={isChecked}
      onChange={changeHandler}
      isDisabled={isDisabled}
      onColor={onColor}
      offColor={offColor}
    />
  );
};

SwitchExample.args = {
  checked: true,
  onChange: () => {},
  isDisabled: false,
  onColor: "var(--primary-200, #177ba6)",
  offColor: "var(--system-50, #fff)",
};
