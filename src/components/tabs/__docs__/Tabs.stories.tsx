import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Tabs",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const TabsList: Story = {
  args: {
    tabs: [
      {
        active: true,
        title: "Tab One",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
      {
        active: false,
        title: "Tab Two",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
      {
        active: false,
        title: "Tab Three",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
    ],
  },
};
