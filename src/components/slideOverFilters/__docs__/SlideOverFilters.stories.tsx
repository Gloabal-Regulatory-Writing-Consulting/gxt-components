import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import SlideOverFilters from "../SlideOverFilters";
import { Button } from "../../button";

const filterOptions = [
  ...Array.from({ length: 4 }, (_v, i) => ({
    header: `Header ${i + 1}`,
    isSearchAble: true,
    isAccordionOpen: true,
    onChangeCallback: () => {
      console.log(`test ${i + 1}`);
    },
    checkboxOptions: [
      ...Array.from({ length: 4 }, (_v, j) => ({
        label: `Test Option ${i * 6 + j + 1}`,
        name: `test ${i * 6 + j + 1}`,
        onChange: () => {},
      })),
    ],
  })),
];

const meta: Meta<typeof SlideOverFilters> = {
  title: "SlideOverFilters",
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    const handleClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Filters</Button>
        <SlideOverFilters
          {...args}
          isOpen={isOpen}
          onCloseHandler={handleClose}
        />
      </>
    );
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SlideOverFilters>;

export const SlideOverFiltersComponent: Story = {
  args: {
    filtersOptions: filterOptions,
    title: "Filters Templates",
    resetButtonLabel: "Clear Selection",
    applyButtonLabel: "Filter",
    closeButtonLabel: "Close",
  },
};
