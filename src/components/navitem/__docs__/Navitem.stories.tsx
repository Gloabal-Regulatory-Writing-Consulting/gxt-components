import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import SvgIcon, { IconType } from "../../svg/SvgIcon";
import { BrowserRouter as Router } from "react-router-dom";

import Navitem from "../Navitem";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const CustomIcon: FC<{
  iconType: IconType;
  size: number;
  className: string;
  stroke: string;
}> = ({ stroke }) => (
  <SvgIcon
    iconType={IconType.SEARCH}
    size={20}
    className="custom-icon"
    stroke={stroke}
    fill={stroke}
  />
);

const meta: Meta<typeof Navitem> = {
  title: "Navitem",
  component: Navitem,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Navitem>;

export const NavitemComponent: Story = {
  args: {
    navigateTo: "/",
    text: "Search",
    Icon: CustomIcon as React.ComponentType<any> | undefined,
    isExpanded: true,
    isLinkActive: () => false,
  },
};
