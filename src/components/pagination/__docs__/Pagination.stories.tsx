import type { Meta, StoryObj } from "@storybook/react";
import PaginationExample from "./PaginationExample";

const meta: Meta<typeof PaginationExample> = {
  title: "Pagination",
  component: PaginationExample,
};

export default meta;
type Story = StoryObj<typeof PaginationExample>;

export const Pagination: Story = {
  args: {
    totalItems: 100,
    perPageOptions: [10, 25, 50, 100],
    itemsPerPage: 10,
    label: "documents",
  },
};
