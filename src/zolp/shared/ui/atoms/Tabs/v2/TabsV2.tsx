import React, { FC, ReactNode } from 'react';
import { Container, Tab } from './TabsV2.styled.ts';

export type Tab = {
  content: ReactNode;
  active?: boolean;
  disabled?: boolean;
  pointerEvents?: string;
  onClick?: () => void;
};

type TabsProps = {
  items: Tab[];
  buttonWidth?: string;
  containerHeight?: string;
  containerWidth?: string;
  containerMaxWidth?: string;
};

const TabsV2: FC<TabsProps> = ({
  items,
  containerWidth = 'auto',
  buttonWidth = 'max-content',
  containerHeight,
  containerMaxWidth,
}) => {
  return (
    <Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      containerMaxWidth={containerMaxWidth}
    >
      {items?.map((tab, index) => (
        <Tab
          key={`tab-${index}`}
          buttonWidth={buttonWidth}
          pointerEvents={tab.pointerEvents}
          onClick={!tab.disabled && tab?.onClick ? tab?.onClick : () => {}}
          className={`${tab.active ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
        >
          {tab.content}
        </Tab>
      ))}
    </Container>
  );
};

export default TabsV2;
