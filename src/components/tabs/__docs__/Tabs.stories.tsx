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
        title: "Active Tab",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
      {
        active: false,
        title: "Inactive Tab",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
      {
        active: false,
        title: "Inactive Tab",
        onClickHandler: () => console.log("Inactive Tab clicked"),
      },
    ],
  },
};
