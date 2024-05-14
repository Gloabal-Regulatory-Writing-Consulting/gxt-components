import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Tab",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const ActiveTab: Story = {
  args: {
    active: true,
    disabled: false,
    title: "Active Tab",
    onClickHandler: () => console.log("Active Tab clicked"),
  },
};

export const InactiveTab: Story = {
  args: {
    active: false,
    title: "Inactive Tab",
    onClickHandler: () => console.log("Inactive Tab clicked"),
  },
};
