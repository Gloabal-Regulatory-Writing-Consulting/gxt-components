import { Meta, StoryObj } from "@storybook/react";
import TableHeader from "../TableHeader";

export default {
  title: "TableHeader",
  component: TableHeader,
} as Meta;
type Story = StoryObj<typeof TableHeader>;

export const TableHeaderExample: Story = {
  args: {
    ColumnName: "id",
    handleColumnSort: (order, columnName) => {
      console.log("handleColumnSort", order, columnName);
    },
    Title: "New Column",
    backgroundColor: "var(--primary-200, #177ba6)",
    className: "",
    height: "345",
    activeColumn: { order: "ASC", column: "id" },
  },
};
