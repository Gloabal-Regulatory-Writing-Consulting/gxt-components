import { FC } from "react";
import Tab, { TabProps } from "../tab/Tab";
import "./tabs.css";

export type TabsProps = {
  tabs: TabProps[];
  className?: string;
  tabStyle?: string;
};

const Tabs: FC<TabsProps> = ({ tabs, className = "", tabStyle = "" }) => {
  return (
    <div className={`container ${className}`} data-testid="tabs-container">
      {tabs.map((tab) => (
        <Tab key={tab.title} {...tab} className={tabStyle} />
      ))}
    </div>
  );
};

export default Tabs;
