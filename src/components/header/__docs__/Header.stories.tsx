import React from "react";
import { Meta } from "@storybook/react";
import { Header } from "../Header";
import { Button } from "../../button";
export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default = () => (
  <div style={{ background: "#f0f0f0" }}>
    <Header>
      <Header.Heading>Upload Documents</Header.Heading>
      <Header.Button>
        <Button variant="secondary" children="Add to Catalog" />
      </Header.Button>
      <Header.Button>
        <Button variant="secondary" children="Cancel" />
      </Header.Button>
      <Header.Breadcrumbs>Home {`  >  `} Upload Documents</Header.Breadcrumbs>
    </Header>
  </div>
);
export const DefaultHeading = () => (
  <div style={{ background: "#f0f0f0" }}>
    <Header>
      <Header.Heading>Upload Documents</Header.Heading>
    </Header>
  </div>
);
export const HeaderWithoutBreadcrumbs = () => (
  <div style={{ background: "#f0f0f0" }}>
    <Header>
      <Header.Heading>Upload Documents</Header.Heading>
      <Header.Button>
        <Button variant="primary" children="View Comments" />
      </Header.Button>
      <Header.Button>
        <Button variant="negative" children="Close" />
      </Header.Button>
    </Header>
  </div>
);
