import React, { FC, useState } from "react";
import Tabs, { TabsProps } from "../Tabs";

const Example: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Tabs
        tabs={tabs.map((tab, index) => ({
          ...tab,
          active: index === activeTab,
          onClickHandler: () => handleTabClick(index),
        }))}
      />
    </div>
  );
};

export default Example;
