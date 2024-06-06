import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "../Breadcrumbs";
import { BrowserRouter as Router, useMatch } from "react-router-dom";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const breadcrumbsList = [
  {
    label: "Catalog",
    to: "/",
  },
  {
    label: "Details",
    to: "/1/view-complaint",
  },
];

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  decorators: [withRouter],
};

const isLinkActive = (path: string) => !!useMatch(`${path}/*`);

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const BreadcrumbsComponent: Story = {
  args: {
    items: breadcrumbsList,
    isLinkActive: isLinkActive,
  },
};
