import { Meta, StoryObj } from "@storybook/react";
import { ModalExample } from "./ModalExample";

export default {
  title: "Components/Modal",
  component: ModalExample,
} as Meta;
type Story = StoryObj<typeof ModalExample>;

export const Modal: Story = {
  args: {
    maxWidth: "500px",
    overlayBackground: "var(--neutral, #00000099)",
    showBackground: true,
  },
};
