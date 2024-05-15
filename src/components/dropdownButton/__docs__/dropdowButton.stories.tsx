import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "DropdownButton",
  component: Example,
};

export default meta;
const selectItems = [
  "Item 1",
  {
    label: "Custom Button",
    element: (
      <button
        style={{ backgroundColor: "#f0f0f0", padding: "8px", border: "none" }}
        onClick={() => console.log("Custom Button Clicked")}
      >
        Custom Button
      </button>
    ),
  },
  "Item 2",
];

type Story = StoryObj<typeof Example>;

export const disabledButton: Story = {
  args: {
    disabled: true,
    selectedItems: [],
  },
};
export const defaultButton: Story = {
  args: {
    disabled: false,
    selectedItems: selectItems,
  },
};
