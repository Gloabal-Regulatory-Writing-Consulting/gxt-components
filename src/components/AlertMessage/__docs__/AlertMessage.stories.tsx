import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AlertMessage from "../AlertMessage";

const meta: Meta<typeof AlertMessage> = {
  title: "AlertMessage",
  component: AlertMessage,
  render: function Render({ alertMessage, alertLink, linkText, alertType }) {
    return (
      <div style={{ width: "20rem" }}>
        <AlertMessage
          alertMessage={alertMessage}
          alertLink={alertLink}
          linkText={linkText}
          alertType={alertType}
        />
      </div>
    );
  },
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
