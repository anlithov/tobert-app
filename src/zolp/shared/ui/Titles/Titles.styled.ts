import styled from 'styled-components';
import {
  AlignInputHorizontal,
  FLEX_ALIGN_HORIZONTAL,
} from '../../lib/constants/align-to-flex.const';
import { titlesTheme } from './Titles.theme.ts';

export const TitlesContainer = styled.div<{
  horizontalAlign: AlignInputHorizontal;
  width?: string;
}>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: ${({ horizontalAlign }) =>
    FLEX_ALIGN_HORIZONTAL[horizontalAlign]};
  > * {
    text-align: ${({ horizontalAlign }) => horizontalAlign};
  }
`;

export const Title = styled.div<{
  fontSize?: string;
  fontWeight?: number;
  width?: string;
}>`
  align-items: center;
  font-size: ${(props) => props.fontSize ?? '1.4em'};
  font-weight: ${(props) => props.fontWeight ?? 500};
  line-height: 1.43;
  letter-spacing: 0.01em;
  width: ${({ width }) => width};
  text-overflow: ellipsis;
  ${(props) =>
    props.width &&
    `
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
  `}
  &.uppercase {
    text-transform: uppercase;
  }
`;

export const SubTitle = styled.div<{
  fontSize?: string;
  fontWeight?: number;
  width?: string;
}>`
  font-size: ${(props) => props.fontSize ?? '1.2em'};
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: ${({ width }) => width};
  color: ${({ theme }) => titlesTheme(theme).subtitle};
  ${(props) =>
    props.width &&
    `
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
  `}
`;
