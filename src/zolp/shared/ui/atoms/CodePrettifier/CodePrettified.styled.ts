import styled from 'styled-components';
import { tableHeaderTheme } from './CodePrettified.theme.ts';

export const CodeContainer = styled.pre`
  display: flex;
  overflow: hidden;
  background-color: ${({ theme }) => tableHeaderTheme(theme).backgroundColor};
  border: 5px solid ${({ theme }) => tableHeaderTheme(theme).border};
  padding: 2em;
  width: 100%;
  border-radius: 1em;

  .json-key {
    color: ${({ theme }) => tableHeaderTheme(theme).key};
  }

  .json-value {
    color: ${({ theme }) => tableHeaderTheme(theme).value};
  }

  .json-string {
    color: ${({ theme }) => tableHeaderTheme(theme).string};
  }
  div {
    &::-webkit-scrollbar {
      height: 0;
    }
  }
  div > div {
    &::-webkit-scrollbar {
      height: 0;
    }
  }
  div > div > div {
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;
