import type { Meta, StoryObj } from "@storybook/react";
import CheckboxInput from "../CheckboxInput";

const meta: Meta<typeof CheckboxInput> = {
  title: "CheckboxInput",
  component: CheckboxInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckboxInput>;

export const Unchecked: Story = {
  args: {
    disabled: false,
    inputSize: "small",
    indeterminate: false,
    checked: false,
    onChange: (e) => {
      e.preventDefault();
    },
  },
};

export const Checked: Story = {
  args: {
    ...Unchecked.args,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Unchecked.args,
    indeterminate: true,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    inputSize: "small",
    indeterminate: false,
    checked: false,
  },
};

export const CheckedAndDisable: Story = {
  args: {
    disabled: true,
    inputSize: "small",
    indeterminate: false,
    checked: true,
  },
};

export const IndeterminateAndDisable: Story = {
  args: {
    disabled: true,
    inputSize: "small",
    indeterminate: true,
    checked: false,
  },
};

export const LabeledCheckbox: Story = {
  args: {
    disabled: false,
    inputSize: "small",
    indeterminate: false,
    checked: false,
    label: "Click me",
  },
};
