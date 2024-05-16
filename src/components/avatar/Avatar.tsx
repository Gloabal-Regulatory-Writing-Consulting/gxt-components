import React, { ChangeEvent, useMemo } from "react";
import { IconType } from "../svg/SvgIcon";
import { ThemeProvider } from "styled-components";
import {
  AvatarBox,
  AvatarButton,
  AvatarContainer,
  AvatarContent,
  AvatarIcon,
  AvatarText,
  StyledIcon,
  theme,
  UserIcon,
  UserInitials,
} from "./AvatarStyledComponents";

export type AvatarProps = {
  size: "small" | "large";
  onClickHandler?: () => void;
  handleImageUpload?: (e: ChangeEvent<HTMLInputElement>) => void;
  user: UserObj;
  isExpanded?: boolean;
  imageUrl?: string;
};

export type UserObj = {
  firstName: string;
  lastName: string;
  avatar?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  size,
  onClickHandler,
  handleImageUpload,
  user,
  isExpanded,
  imageUrl,
}: AvatarProps) => {
  const { firstName, lastName, avatar } = user;
  const userName = `${firstName} ${lastName}`;

  const userInitials = useMemo(() => {
    const lastNameParts = lastName?.split(/[ -]/).filter((e) => e);
    const lastPart = lastNameParts?.at(-1) ?? "";
    return (firstName?.charAt(0) || "") + (lastPart?.charAt(0) || "");
  }, [firstName, lastName]);

  const noIcon: JSX.Element = (
    <UserInitials size={size}>{userInitials}</UserInitials>
  );

  const userIcon: JSX.Element = (
    <UserIcon src={imageUrl || avatar} alt="Avatar" />
  );

  const userAvatar = () => {
    switch (true) {
      case !!imageUrl || !!avatar:
        return userIcon;
      default:
        return noIcon;
    }
  };

  const editImage = handleImageUpload ? (
    <>
      <StyledIcon
        iconType={IconType.PENCIL}
        size={size === "small" ? 8 : 18}
      ></StyledIcon>
      <input
        type="file"
        data-testid="user-image-input"
        style={{ display: "none" }}
        id="img"
        name="img"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  ) : null;

  return (
    <ThemeProvider theme={theme}>
      <AvatarContainer className={`${isExpanded && "expanded-avatar"}`}>
        <AvatarIcon data-testid="avatarIcon" onClick={onClickHandler}>
          <AvatarBox>
            <AvatarButton size={size} className={`avatar-button`}>
              <AvatarContent>{userAvatar()}</AvatarContent>
            </AvatarButton>
            {<label htmlFor="img"> {editImage} </label>}
          </AvatarBox>
          {isExpanded && (
            <div>
              <AvatarText weight="bold" size={size}>
                {userName}
              </AvatarText>
              <AvatarText size={size}>View profile</AvatarText>
            </div>
          )}
        </AvatarIcon>
      </AvatarContainer>
    </ThemeProvider>
  );
};

export default Avatar;
