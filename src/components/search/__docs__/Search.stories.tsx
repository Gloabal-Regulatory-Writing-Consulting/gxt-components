import type { Meta, StoryObj } from "@storybook/react";

import Search from "../Search";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const SearchComponent: Story = {
  args: {
    onChangeCallback: (searchTerm: string) => console.log(searchTerm),
    width: "20rem",
  },
};
