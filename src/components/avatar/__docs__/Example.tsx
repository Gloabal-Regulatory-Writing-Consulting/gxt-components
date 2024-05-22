import React, { FC } from "react";
import Avatar, { AvatarProps } from "../Avatar";

const Example: FC<AvatarProps> = ({
  size,
  user,
  isExpanded,
  imageUrl,
  onClickHandler,
  handleImageUpload,
}) => {
  return (
    <Avatar
      size={size}
      user={user}
      isExpanded={isExpanded}
      imageUrl={imageUrl}
      onClickHandler={onClickHandler}
      handleImageUpload={handleImageUpload}
    />
  );
};

export default Example;
