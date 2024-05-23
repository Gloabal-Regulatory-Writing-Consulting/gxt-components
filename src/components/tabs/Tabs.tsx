import React from "react";
import styled from "styled-components";
import Tab, { TabProps } from "../tab/Tab";

export type TabsProps = {
  tabs: TabProps[];
  className?: string;
  tabStyle?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Tabs: React.FC<TabsProps> = ({ tabs, className = "", tabStyle = "" }) => {
  return (
    <Container className={className} data-testid="tabs-container">
      {tabs.map((tab) => (
        <Tab key={tab.title} {...tab} className={tabStyle} />
      ))}
    </Container>
  );
};

export default Tabs;
