import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    disabled: false,
    children: "Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
    children: "Button",
  },
};
export const Negative: Story = {
  args: {
    variant: "negative",
    disabled: false,
    children: "Button",
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
    disabled: false,
    children: "Button",
  },
};
