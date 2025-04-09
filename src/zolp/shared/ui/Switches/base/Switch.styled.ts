import styled from 'styled-components';
import { switchTheme } from './Switch.theme.ts';

export const Container = styled.div<{ width: string; thumbSize: string }>`
  position: relative;
  display: flex;
  place-items: center;
  place-content: center;
  width: ${({ width }) => width};
  height: ${({ thumbSize }) => thumbSize};
  background: ${({ theme }) => switchTheme(theme).backgroundInActive};
  border-radius: ${({ thumbSize }) => thumbSize};
  &.active {
    background: ${({ theme }) => switchTheme(theme).backgroundActive};
  }
  &:hover {
    .thumb {
      background: ${({ theme }) =>
        switchTheme(theme).thumbBackgroundInActiveHovered};
      &.active {
        background: ${({ theme }) =>
          switchTheme(theme).thumbBackgroundActiveHovered};
      }
    }
  }
`;

export const ThumbContainer = styled.div<{ size: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  place-items: center;
  place-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  transition: 0.1s;
  &.active {
    left: ${({ size }) => `calc(100% - ${size})`};
  }
`;

export const BorderContainer = styled.div<{ size: string; thumbSize: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
  border: 0.2em solid
    ${({ theme }) => switchTheme(theme).thumbBackgroundInActive};
  border-radius: ${({ thumbSize }) => thumbSize};
  transition: 0.1s;
  &.active {
    right: 0;
    left: auto;
    border: 0.2em solid ${({ theme }) => switchTheme(theme).backgroundActive};
  }
`;

export const Thumb = styled.div<{ size: string }>`
  display: flex;
  place-items: center;
  place-content: center;
  background: ${({ theme }) => switchTheme(theme).thumbBackgroundInActive};
  border-radius: 50%;
  width: ${({ size }) => `calc(${size} * 0.5)`};
  height: ${({ size }) => `calc(${size} * 0.5)`};
  transition: 0.1s;

  &.active {
    right: 0;
    left: auto;
    width: ${({ size }) => `calc(${size} * 0.74)`};
    height: ${({ size }) => `calc(${size} * 0.74)`};
    background: ${({ theme }) => switchTheme(theme).thumbBackgroundActive};
  }
  &:active {
    width: ${({ size }) => `calc(${size} * 0.86)`};
    height: ${({ size }) => `calc(${size} * 0.86)`};
  }
`;
