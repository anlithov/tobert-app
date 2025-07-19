import React, { FC, ReactNode } from 'react';
import { BlockContainer, Container } from './SegmentedButton.styled.ts';

interface Props {
  containerHeight?: string;
  paddingHorizontal?: string;
  blockWidth?: string;
  items: {
    content: ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
  }[];
}
const SegmentedButtons: FC<Props> = ({
  items,
  paddingHorizontal,
  containerHeight,
  blockWidth,
}) => {
  return (
    <Container height={containerHeight}>
      {items.map((item, index) => {
        return (
          <BlockContainer
            onClick={item?.onClick}
            key={index}
            paddingHorizontal={paddingHorizontal}
            blockWidth={blockWidth ?? `calc(100% / ${items.length})`}
            className={`
            ${item?.active ? 'active' : ''} ${
              item?.disabled ? 'disabled' : ''
            } ${index === 0 ? 'first' : ''} ${
              index === items.length - 1 ? 'last' : ''
            }
            
            `}
          >
            {item.content}
          </BlockContainer>
        );
      })}
    </Container>
  );
};

export default SegmentedButtons;
