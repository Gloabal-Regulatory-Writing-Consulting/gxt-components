import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown, { Position } from "../Dropdown";
import KababIcon from "../../../assets/icons/kabab-icon.svg";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown<string>>;

const getSvgIcon = (disabled: boolean) => (
  <KababIcon
    width={20}
    height={20}
    fill={
      disabled ? "var(--neutral-200, #9CA3AF)" : "var(--primary-50, #2AACE2)"
    }
  />
);

const defaultCustomStyles = {
  container: {},
  button: {},
  icon: {},
  itemsWrapper: {},
  item: {},
  placeholder: {},
};

export const DropdownButton: Story = {
  args: {
    disabled: false,
    type: "button",
    options: ["Upload CSV", "Upload DOCX", "Upload PDF"],
    renderOption: (option) => <span>{option}</span>,
    placeholder: "Upload",
    onSelect: (option) => console.log("Selected option:", option),
    dropdownIcon: true,
    position: Position.Center,
    customStyles: defaultCustomStyles,
  },
};

export const DropdownSelect: Story = {
  args: {
    disabled: false,
    type: "button",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    placeholder: "Select an option",
    onSelect: (option) => console.log("Selected option:", option),
    dropdownIcon: true,
    position: Position.Bottom,
    customStyles: defaultCustomStyles,
  },
};

export const LabeledDropdown: Story = {
  args: {
    disabled: false,
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    placeholder: "Select an option",
    label: "Select",
    onSelect: (option) => console.log("Selected option:", option),
    dropdownIcon: true,
    position: Position.Bottom,
    customStyles: defaultCustomStyles,
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    type: "button",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    placeholder: "Select an option",
    onSelect: (option) => console.log("Selected option:", option),
    dropdownIcon: true,
    customStyles: defaultCustomStyles,
  },
};

export const ActionsDropdown: Story = {
  args: {
    disabled: false,
    type: "button",
    options: ["Option 1", "Option 2", "Option 3"],
    renderOption: (option) => <span>{option}</span>,
    placeholder: getSvgIcon(false),
    onSelect: (option) => console.log("Selected option:", option),
    position: Position.Center,
    customStyles: defaultCustomStyles,
  },
  decorators: [
    (Story, context) => {
      const { disabled } = context.args;
      context.args.placeholder = getSvgIcon(!!disabled);
      return <Story />;
    },
  ],
};
