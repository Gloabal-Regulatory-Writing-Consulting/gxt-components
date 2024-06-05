import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "../Breadcrumbs";

const breadcrumbsList = [
  {
    label: "Catalog",
    link: "/",
  },
  {
    label: "Details",
    link: "/1/view-complaint",
  },
];

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  render: function Render({ items }) {
    return (
      <div style={{ width: "20rem", color: "#9CA3AF" }}>
        <Breadcrumbs items={items} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const BreadcrumbsComponent: Story = {
  args: {
    items: breadcrumbsList,
  },
};
