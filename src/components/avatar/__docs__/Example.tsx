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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Avatar
        size={size}
        user={user}
        isExpanded={isExpanded}
        imageUrl={imageUrl}
        onClickHandler={onClickHandler}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default Example;
