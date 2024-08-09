import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "TagsField",
  component: Example,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Example<string>>;

export const Primary: Story = {
  args: {
    value: [
      {
        label: "Option 1",
        value: "Option 1",
      },
      {
        label: "Option 2",
        value: "Option 2",
      },
    ],
    onClick: () => {
      console.log("clicked");
    },
    disabled: false,
    error: false,
    helpText: "Help Text",
    label: "Tags",
    placeholder: "Click to select",
  },
};
