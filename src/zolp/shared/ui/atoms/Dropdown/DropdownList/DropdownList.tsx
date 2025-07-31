import React, { FC, ReactNode } from 'react';
import { Container, Item } from './DropdownList.styled.ts';

export type DropdownListItemProps = {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  static?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

interface DropdownListProps {
  items: DropdownListItemProps[];
  width?: string;
  maxHeight?: string;
  className?: string;
  padding?: string;
  BottomComponent?: ReactNode;
}

const DropdownList: FC<DropdownListProps> = ({
  items,
  width = '100%',
  maxHeight = 'initial',
  padding = '0.6em 0',
  className,
  BottomComponent,
}) => {
  return (
    <Container width={width} padding={padding} className={className}>
      <div className="list" style={{ maxHeight }}>
        {items.map((item, index) => (
          <Item
            key={index}
            className={`${item.disabled ? 'disabled' : ''} ${
              item.active ? 'active' : ''
            } ${item.static ? 'static' : ''}`}
            onClick={item.onClick}
          >
            {item.children}
          </Item>
        ))}
      </div>
      {BottomComponent}
    </Container>
  );
};

export default DropdownList;
