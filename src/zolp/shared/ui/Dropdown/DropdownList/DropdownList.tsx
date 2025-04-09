import React, { FC, ReactNode } from 'react';
import { Container, Item } from './DropdownList.styled.ts';

export type DropdownListItemProps = {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  static?: boolean;
};

type DropdownListProps = {
  items: DropdownListItemProps[];
  width?: string;
  maxHeight?: string;
  className?: string;
  padding?: string;
};

const DropdownList: FC<DropdownListProps> = ({
  items,
  width = '100%',
  maxHeight = 'initial',
  padding = '0.6em 0',
  className,
}) => {
  return (
    <Container
      maxHeight={maxHeight}
      width={width}
      padding={padding}
      className={className}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          className={`${item.disabled ? 'disabled' : ''} ${
            item.active ? 'active' : ''
          } ${item.static ? 'static' : ''}`}
        >
          {item.children}
        </Item>
      ))}
    </Container>
  );
};

export default DropdownList;
