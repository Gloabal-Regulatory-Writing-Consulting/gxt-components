import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Header from "../Header";
import { Button } from "../../button";
import { BrowserRouter as Router, useMatch } from "react-router-dom";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  decorators: [withRouter],
};

export default meta;

const isLinkActive = (path: string) => !!useMatch(`${path}/*`);

type Story = StoryObj<typeof Header>;

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Upload Documents", to: "/upload-documents", active: true },
];

export const Default: Story = {
  render: () => (
    <Header
      style={{ border: "1px solid black" }}
      breadcrumbItems={breadcrumbItems}
      isLinkActive={isLinkActive}
    >
      <Header.Heading>Upload Documents</Header.Heading>
      <Header.Actions>
        <Button variant="secondary">Add to Catalog</Button>
        <Button variant="secondary">Cancel</Button>
      </Header.Actions>
    </Header>
  ),
};

export const HeaderWithoutBreadcrumbs = () => (
  <Header>
    <Header.Heading>Upload Documents</Header.Heading>
    <Header.Actions>
      <Button variant="primary">View Comments</Button>
      <Button variant="negative">Close</Button>
    </Header.Actions>
  </Header>
);
