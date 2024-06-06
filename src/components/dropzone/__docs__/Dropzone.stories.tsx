import { Meta, StoryObj } from "@storybook/react";
import Dropzone from "./Example";

const meta: Meta<typeof Dropzone> = {
  title: "Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  args: {
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
    maxFiles: 10,
    label: "",
  },
};
