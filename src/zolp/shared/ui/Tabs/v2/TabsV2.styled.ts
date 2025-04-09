import styled from 'styled-components';
import { tabsV2Theme } from './TabsV2.theme.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div<{
  containerWidth?: string;
  containerHeight?: string;
  containerMaxWidth?: string;
}>`
  display: flex;
  width: ${({ containerWidth }) => containerWidth ?? '100%'};
  max-width: ${({ containerMaxWidth }) => containerMaxWidth ?? 'auto'};
  height: ${({ containerHeight }) => containerHeight ?? '4.8em'};
  background: ${({ theme }) => tabsV2Theme(theme).backgroundContainer};
  border-radius: ${({ containerHeight }) =>
    containerHeight?.endsWith('em')
      ? parseFloat(containerHeight.slice(0, -2)) * 0.7 + 'em'
      : '3em'};
`;

export const Tab = styled.div<{
  pointerEvents?: string;
  buttonWidth?: string;
}>`
  cursor: pointer;
  position: relative;
  line-height: 2em;
  letter-spacing: 0.01em;
  font-weight: 400;
  width: ${({ buttonWidth }) => buttonWidth ?? '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  color: ${({ theme }) => addAlpha(tabsV2Theme(theme).unActiveTabColor, 0.9)};
  transition: all 0.1s ease;
  &.active {
    background: ${({ theme }) =>
      addAlpha(tabsV2Theme(theme).activeTabContainer, 0.5)};
    color: ${({ theme }) => tabsV2Theme(theme).unActiveTabColor};
    &:hover {
      background: ${({ theme }) =>
        addAlpha(tabsV2Theme(theme).activeTabContainer, 0.6)};
      color: ${({ theme }) => tabsV2Theme(theme).hoverTabColor};
    }
  }
  &:hover {
    background: ${({ theme }) =>
      addAlpha(tabsV2Theme(theme).hoverTabContainer, 0.6)};
    color: ${({ theme }) => tabsV2Theme(theme).hoverTabColor};
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
