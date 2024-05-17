import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SlideOverFooter, SlideOverHeader, SlideOver } from "../SlideOver";
import Button from "../../button/Button";

const meta: Meta<typeof SlideOver> = {
  title: "SlideOver",
  component: SlideOver,
};

export default meta;

type Story = StoryObj<typeof SlideOver>;

export const RightSlideOverComponent: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("closed"),
    position: "right",
    overlay: true,
    width: "250px",
    overlayClasses: "",
    contentClasses: "",
    slideOverClasses: "",
    slideOverStyles: {},
    contentStyles: {},
    overlayStyles: {},
    children: [
      <SlideOverHeader key="1">Header text</SlideOverHeader>,
      <SlideOverFooter key="2">
        <Button>Testing</Button>
      </SlideOverFooter>,
    ],
  },
};

export const LeftSlideOverComponent: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("closed"),
    position: "left",
    overlay: true,
    width: "250px",
    overlayClasses: "",
    contentClasses: "",
    slideOverClasses: "",
    slideOverStyles: {},
    contentStyles: {},
    overlayStyles: {},
    children: [
      <SlideOverHeader key="1">Header Story test </SlideOverHeader>,
      <SlideOverFooter key="2">
        <Button>Testing</Button>
      </SlideOverFooter>,
    ],
  },
};
