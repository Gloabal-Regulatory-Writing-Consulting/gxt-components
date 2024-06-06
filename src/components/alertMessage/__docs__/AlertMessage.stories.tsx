import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import AlertMessage from "../AlertMessage";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const meta: Meta<typeof AlertMessage> = {
  title: "AlertMessage",
  component: AlertMessage,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof AlertMessage>;

export const Positive: Story = {
  args: {
    alertMessage: "Your changes have been saved successfully.",
    alertLink: "/details",
    linkText: "View details",
    alertType: "positive",
  },
};

export const Negative: Story = {
  args: {
    alertMessage: "An error occurred while saving your changes.",
    alertLink: "/error-details",
    linkText: "View details",
    alertType: "negative",
  },
};

export const Warning: Story = {
  args: {
    alertMessage: "Warning: Please check your inputs.",
    alertLink: "/warning-details",
    linkText: "View details",
    alertType: "warning",
  },
};
