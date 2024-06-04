import type { Meta, StoryObj } from "@storybook/react";
import React, { FunctionComponent, SVGProps } from "react";
import { BrowserRouter as Router, useMatch } from "react-router-dom";
import Navbar from "../Navbar";
import SearchIconSvg from "../../../assets/icons/search.svg";
import ChevronDownIcon from "../../../assets/icons/chevrondown.svg";
import Pencil from "../../../assets/icons/pencil.svg";

const withRouter = (Story) => (
  <Router>
    <Story />
  </Router>
);

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  decorators: [withRouter],
  tags: ["autodocs"],
};

const SearchIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ stroke }) => (
  <SearchIconSvg
    width={20}
    height={20}
    className="custom-icon"
    fill={stroke || "var(--neutral-200, #9CA3AF)"}
  />
);

const PencilIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ stroke }) => (
  <Pencil
    width={18}
    height={18}
    className="custom-icon"
    fill={stroke || "var(--neutral-200, #9CA3AF)"}
  />
);

const ChevronIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({
  stroke,
}) => (
  <ChevronDownIcon
    width={20}
    height={20}
    className="custom-icon"
    fill={stroke || "var(--neutral-200, #9CA3AF)"}
  />
);

const contentNavlinks = [
  {
    navigateTo: "/Search",
    text: "Search",
    Icon: SearchIcon,
  },
  {
    navigateTo: "/Chevron",
    text: "Chevron",
    Icon: ChevronIcon,
  },
];

const footerNavLinks = [
  {
    navigateTo: "/EditFiles",
    text: "Edit Files",
    Icon: PencilIcon,
    onClickHandler: () => console.log("Edit Files clicked"),
  },
];

const isLinkActive = (path: string) => !!useMatch(`${path}/*`);

export default meta;
type Story = StoryObj<typeof Navbar>;

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
    expansionTime: 300,
    isLinkActive: isLinkActive,
  },
};
