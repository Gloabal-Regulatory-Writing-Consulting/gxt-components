import React, { FC } from "react";
import Navbar, { NavbarProps } from "../Navbar";

const Example: FC<NavbarProps> = ({
  footerLinks,
  contentLinks,
  setShowAvatarMenu,
  showAvatarMenu,
  clientStyling,
  user,
}) => {
  return (
    <Navbar
      footerLinks={footerLinks}
      contentLinks={contentLinks}
      setShowAvatarMenu={setShowAvatarMenu}
      showAvatarMenu={showAvatarMenu}
      clientStyling={clientStyling}
      user={user}
    />
  );
};

export default Example;
