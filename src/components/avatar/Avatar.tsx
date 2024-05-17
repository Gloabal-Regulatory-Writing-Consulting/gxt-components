import React, { ChangeEvent, useMemo } from "react";
import { IconType } from "../svg/SvgIcon";
import {
  AvatarBox,
  AvatarButton,
  AvatarContainer,
  AvatarIcon,
  AvatarText,
  StyledIcon,
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
    <UserInitials data-testid="user-initials" size={size}>{userInitials}</UserInitials>
  );

  const userIcon: JSX.Element = (
    <UserIcon src={imageUrl || avatar} alt="Avatar" />
  );

  const userAvatar = useMemo(() => {
    switch (true) {
        case !!imageUrl || !!avatar:
            return userIcon;
        default:
            return noIcon;
    }
}, [imageUrl, avatar, userIcon, noIcon]);

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
    <AvatarContainer className={`${isExpanded && "expanded-avatar"}`}>
      <AvatarIcon data-testid="avatarIcon" onClick={onClickHandler}>
        <AvatarBox>
          <AvatarButton size={size} className={`avatar-button`}>
            {userAvatar}
          </AvatarButton>
          {<label htmlFor="img"> {editImage} </label>}
        </AvatarBox>
        {isExpanded && (
          <div>
            <AvatarText weight="bold" size={size}>
              {userName}
            </AvatarText>
            <AvatarText weight="normal" size={size}>View profile</AvatarText>
          </div>
        )}
      </AvatarIcon>
    </AvatarContainer>
  );
};

export default Avatar;
