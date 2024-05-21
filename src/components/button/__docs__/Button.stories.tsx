import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Button from "../Button";
import { SvgIcon } from "../../svg";
import { IconType } from "../../svg/SvgIcon";

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
    circular: false,
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
export const Negative: Story = {
  args: {
    ...Primary.args,
    variant: "negative",
  },
};

export const Positive: Story = {
  args: {
    ...Primary.args,
    variant: "positive",
  },
};

export const IconButton: Story = {
  args: {
    ...Primary.args,
    circular: true,
    children: <SvgIcon iconType={IconType.SMILEYFACE} />,
  },
};
