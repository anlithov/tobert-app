import React, { FC, ReactNode } from 'react';
import { Container, Tab } from './Tabs.styled';

export type Tab = {
  content: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

type TabsProps = {
  items: Tab[];
  containerWidth?: string;
  containerHeight?: string;
};

const Tabs: FC<TabsProps> = ({ items, containerWidth, containerHeight }) => {
  return (
    <Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
    >
      {items?.map((tab, index) => (
        <Tab
          key={`tab-${index}`}
          disabled={tab.disabled}
          active={tab.active}
          onClick={!tab.disabled && tab?.onClick ? tab?.onClick : () => {}}
        >
          {tab.content}
        </Tab>
      ))}
    </Container>
  );
};

export default Tabs;
