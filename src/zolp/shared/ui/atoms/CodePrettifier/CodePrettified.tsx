import React, { FC } from 'react';
import { CodeContainer } from './CodePrettified.styled.ts';
import { prettyCode } from './utils/pretty-json.ts';
import Draggable from '../ScrollContainers/instances/Dragable/Dragable.tsx';

interface Props {
  data: any;
  placeholder?: string;
}
const CodePrettified: FC<Props> = ({ data, placeholder }) => {
  return (
    <CodeContainer>
      <Draggable rootClass="code-view">
        <div
          id="scooolu"
          style={{
            display: 'flex',
            overflowX: 'scroll',
            width: '100%',
            height: '100%',
          }}
        >
          <pre
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <code
              dangerouslySetInnerHTML={{
                __html: prettyCode.json.prettyPrint(
                  data ?? placeholder ?? 'No data',
                ),
              }}
            />
          </pre>
        </div>
      </Draggable>
    </CodeContainer>
  );
};

export default CodePrettified;
