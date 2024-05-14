import React, { FC } from "react";
import Tab, { TabProps } from "../Tab";
const Example: FC<TabProps> = ({
  active = false,
  onClickHandler = () => {},
  title = "Tab",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Tab active={active} onClickHandler={onClickHandler} title={title} />
    </div>
  );
};

export default Example;
