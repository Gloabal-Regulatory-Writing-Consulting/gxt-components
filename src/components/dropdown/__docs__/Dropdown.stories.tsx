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
  header: {},
};

export const DropdownButton: Story = {
  args: {
    disabled: false,
    type: "button",
    options: [
      { value: "Upload CSV", toolTipText: "Option 1 tooltip" },
      { value: "Upload DOCX" },
      { value: "Upload PDF", disabled: true },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
    placeholder: "Upload",
    onSelect: (option) => console.log("Selected option:", option),
    dropdownIcon: true,
    position: Position.Center,
    customStyles: defaultCustomStyles,
  },
};

export const DividedMenuButton: Story = {
  args: {
    disabled: false,
    type: "button",
    menuType: "divided",
    groupedOptions: [
      {
        header: "Upload",
        options: [
          { value: "Upload CSV", disabled: true },
          { value: "Upload DOCX" },
        ],
      },
      {
        header: "Download",
        options: [
          { value: "Download CSV" },
          { value: "Download DOCX" },
          { value: "Download PDF" },
        ],
        disabled: true,
      },
      {
        header: "",
        options: [{ value: "Close" }],
      },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
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
    type: "select",
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
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
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
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
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
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
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
    renderOption: (option) => <span>{option?.value}</span>,
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
