import React, { FC } from "react";
import Tabs, { TabsProps } from "../Tabs";
const Example: FC<TabsProps> = ({ tabs }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Example;
