import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
} as Meta;
type Story = StoryObj<typeof Tooltip>;

export const TooltipExample: Story = {
  args: {
    tooltipText: "I am a tooltip",
    position: "left",
    children: "Hover me",
    toolToolboxProps: {},
  },
};
