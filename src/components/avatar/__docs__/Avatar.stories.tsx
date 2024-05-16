import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent } from "react";
import Avatar from "../Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 'small',
    onClickHandler: () => console.log('Primary'),
    handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => console.log(e),
    user: {firstName: 'John', lastName: 'Doe'},
    isExpanded: false,
    imageUrl: '',
  },
};

export const Secondary: Story = {
  args: {
    size: 'small',
    onClickHandler: () => console.log('Secondary'),
    user: {firstName: 'John', lastName: 'Doe'},
    isExpanded: false,
    imageUrl: '',
  },
};
