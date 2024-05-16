import React from "react";
import { Meta } from "@storybook/react";
import { Header } from "../Header";
import { Button } from "../../button";
export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default = () => (
  <Header>
    <Header.Heading>Upload Documents</Header.Heading>
    <Header.Button>
      <Button variant="secondary">Add to Catalog</Button>
      <Button variant="secondary">Cancel</Button>
    </Header.Button>
    <Header.Breadcrumbs>Home {`  >  `} Upload Documents</Header.Breadcrumbs>
  </Header>
);

export const HeaderWithoutBreadcrumbs = () => (
  <Header>
    <Header.Heading>Upload Documents</Header.Heading>
    <Header.Button>
      <Button variant="primary">View Comments</Button>
    </Header.Button>
    <Header.Button>
      <Button variant="negative">Close</Button>
    </Header.Button>
  </Header>
);
