import { Meta, StoryObj } from "@storybook/react";
import Divider from "../Divider";

export default {
  title: "Divider",
  component: Divider,
  tags: ["autodocs"],
} as Meta;
type Story = StoryObj<typeof Divider>;

export const DividerExample: Story = {
  args: {
    layout: "vertical",
    color: "medium",
    style: {
      width: "27.4375rem",
      height: "0.0625rem",
    },
  },
};
