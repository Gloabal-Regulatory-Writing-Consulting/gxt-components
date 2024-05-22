import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import { SvgIcon } from "../../svg";
import { IconType } from "../../svg/SvgIcon";
import { BrowserRouter as Router } from "react-router-dom";
import Example from "./Example";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const meta: Meta<typeof Example> = {
  title: "Navbar",
  component: Example,
  decorators: [withRouter],
};

const SearchIcon: FC<{
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

const PencilIcon: FC<{
  iconType: IconType;
  size: number;
  className: string;
  stroke: string;
}> = ({ stroke }) => (
  <SvgIcon
    iconType={IconType.PENCIL}
    size={20}
    className="custom-icon"
    stroke={stroke}
    fill={stroke}
  />
);

const ChevronIcon: FC<{
  iconType: IconType;
  size: number;
  className: string;
  stroke: string;
}> = ({ stroke }) => (
  <SvgIcon
    iconType={IconType.ChevronDown}
    size={20}
    className="custom-icon"
    stroke={stroke}
    fill={stroke}
  />
);

const contentNavlinks = [
  {
    permission: "/Search",
    text: "Search",
    Icon: SearchIcon,
    isExpanded: false,
  },
  {
    permission: "/Chevron",
    text: "Chevron",
    Icon: ChevronIcon,
    isExpanded: false,
  },
];

const footerNavLinks = [
  {
    permission: "/EditFiles",
    text: "Edit Files",
    Icon: PencilIcon,
    isExpanded: false,
  },
];

export default meta;
type Story = StoryObj<typeof Example>;

export const NavbarComponent: Story = {
  args: {
    footerLinks: footerNavLinks,
    contentLinks: contentNavlinks,
    setShowAvatarMenu: () => console.log("Show"),
    showAvatarMenu: false,
    clientStyling: {
      thumbnail:
        "https://assets-global.website-files.com/65c65210ad06f99487c9aae0/65cf95802b737ea9113f9a0e_Rec500-transp.png",
      logo: "https://assets-global.website-files.com/65c52881530653d17b57a875/65cd352d274bc8fe4b952072_Global%20Exp%20Tech_black%20letter_blue%20globe.png",
    },
    user: { firstName: "John", lastName: "Doe" },
  },
};
