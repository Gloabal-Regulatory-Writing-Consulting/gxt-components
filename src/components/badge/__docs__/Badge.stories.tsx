import { Meta } from "@storybook/react";
import Badge, { BadgeProps } from "../Badge";
import React from "react";

export default {
  title: "Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const BadgeExample = (props: BadgeProps) => {
  return <Badge {...props} />;
};

BadgeExample.args = {
  label: "Badge",
  type: "basic",
};
