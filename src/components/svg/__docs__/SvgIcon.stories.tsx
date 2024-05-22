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
    size: 16,
  },
};

export const NextArrowIcon: Story = {
  args: {
    iconType: IconType.NEXT_ARROW,
    size: 24,
  },
};

export const LastPageIcon: Story = {
  args: {
    iconType: IconType.LAST_PAGE,
    size: 24,
  },
};

export const FirstPageIcon: Story = {
  args: {
    iconType: IconType.FIRST_PAGE,
    size: 24,
  },
};

export const ChevronDownIcon: Story = {
  args: {
    iconType: IconType.ChevronDown,
    size: 16,
  },
};

export const BackArrowIcon: Story = {
  args: {
    iconType: IconType.BACK_ARROW,
    size: 24,
  },
};

export const PencilIcon: Story = {
  args: {
    iconType: IconType.PENCIL,
  },
};
