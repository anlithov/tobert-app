import React from 'react';
import styled from 'styled-components';

export const ReplacerContainer = styled.div<{ delay: number }>`
  transition: ${(props) => props.delay / 1000}s ease-in-out;
  &.hidden {
    opacity: 0;
  }
`;

export const ExtendedContainer = styled(
  ({ asComponent: AsComponent = 'div', ...props }) => (
    <AsComponent {...props} />
  ),
)`
  /* Default styles that you want to always be applied */
  ${ReplacerContainer.css}
`;
