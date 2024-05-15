import type { Meta, StoryObj } from "@storybook/react";
import { IconType } from "../SvgIcon";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "SvgIcon",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const SearchIcon: Story = {
  args: {
    iconType: IconType.SEARCH,
  },
};
