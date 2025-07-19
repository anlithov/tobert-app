import styled from 'styled-components';
import { tabsTheme } from './Tabs.theme.ts';
import { addAlpha } from '../../../lib/utils/add-alpha-opacity.util.ts';

export const Container = styled.div<{
  containerWidth?: string;
  containerHeight?: string;
}>`
  position: relative;
  display: flex;
  width: ${({ containerWidth }) => containerWidth || '100%'};
  height: ${({ containerHeight }) => containerHeight ?? '4.8em'};
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 1px;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => tabsTheme(theme).rail};
    z-index: 0;
  }
`;

export const Tab = styled.div<{
  active?: boolean;
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  position: relative;
  font-size: 1.4em;
  line-height: 2em;
  letter-spacing: 0.01em;
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, active, disabled }) =>
    active
      ? addAlpha(tabsTheme(theme).activeTabColor, disabled ? 0.5 : 1)
      : addAlpha(tabsTheme(theme).unActiveTabColor, disabled ? 0.5 : 1)};
  transition: color 0.3s ease;
  z-index: 1;
  &:hover {
    color: ${({ theme, active, disabled }) =>
      active || disabled ? 'none' : tabsTheme(theme).hoverTabColor};
    &::after {
      width: ${({ active }) => (!active ? '20%' : undefined)};
    }
  }

  &::after {
    transition: 0.1s ease;
    position: absolute;
    bottom: 0;
    content: '';
    height: 0.3em;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: ${({ theme, disabled }) =>
      addAlpha(tabsTheme(theme).activeTabBorderColor, disabled ? 0.5 : 1)};
    border-radius: 1em 1em 0 0;
  }
`;
