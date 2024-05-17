import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown<string>>;

export const DropdownButton: Story = {
  args: {
    disabled: false,
    type: "button",
    options: ["Upload CSV", "Upload DOCX", "Upload PDF"],
    renderOption: (option) => <span>{option}</span>,
    label: "Upload",
    onSelect: (option) => console.log("Selected option:", option),
  },
};

export const DropdownSelect: Story = {
  args: {
    disabled: false,
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    label: "Select an option",
    onSelect: (option) => console.log("Selected option:", option),
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    type: "button",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    label: "Select an option",
    onSelect: (option) => console.log("Selected option:", option),
  },
};
