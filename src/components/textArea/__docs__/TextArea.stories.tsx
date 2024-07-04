import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../TextArea";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Example: Story = {
  args: {
    id: "About",
    name: "enabledTextarea",
    heading: "About",
    placeholder: "Placeholder Text",
    caption: "enter some details",
    disabled: false,
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
};
