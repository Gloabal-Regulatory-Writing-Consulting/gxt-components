import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Input",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    inputType: "text",
    label: "",
    primary: true,
    disabled: false,
    inputSize: "small",
    onChange: (e) => console.log(e.target.value),
    customStyles: {
      input: {
        width: "100%",
      },
    },
  },
};
export const Label: Story = {
  args: {
    label: "This is a label",
    primary: false,
    disabled: false,
    inputSize: "small",
    onChange: (e) => console.log(e.target.value),
  },
};
export const Password: Story = {
  args: {
    inputType: "password",
    label: "This is a label",
    primary: false,
    disabled: false,
    inputSize: "small",
    onChange: (e) => console.log(e.target.value),
    customStyles: {},
  },
};
export const Disabled: Story = {
  args: {
    label: "",
    primary: true,
    disabled: true,
    inputSize: "small",
    onChange: (e) => console.log(e.target.value),
  },
};
