import { Meta, StoryObj } from "@storybook/react";
import { ModalExample } from "./ModalExample";

export default {
  title: "Modal",
  component: ModalExample,
} as Meta;
type Story = StoryObj<typeof ModalExample>;

export const Modal: Story = {
  args: {
    maxWidth: "60rem",
    overlayBackground: "var(--neutral, #00000099)",
    overlay: true,
    isOpen: true,
  },
};
