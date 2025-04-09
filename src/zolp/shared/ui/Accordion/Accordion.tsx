import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Container, Content } from './Accordion.styled';
import { useAccordion } from './libs/hooks/useAccordion.ts';
import AccordionControlField from './AccordionControlField/AccordionControlField';

type Props = {
  name: string;
  children?: ReactNode;
  width?: string;
  padding?: string;
  initialOpened?: boolean;
  controlFieldHeight?: string;
  controlChildren: ReactNode;
  rightElement?: ReactNode;
  disabled?: boolean;
  disabledDropdown?: boolean;
};

const Accordion: FC<Props> = ({
  name,
  children,
  width,
  padding = '2.5em',
  controlFieldHeight,
  controlChildren,
  disabled,
  disabledDropdown,
  initialOpened,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const { addAccordion, getAccordionVisibility, toggleAccordionVisibility } =
    useAccordion();
  const accordionName = name;

  useEffect(() => {
    addAccordion(accordionName, !!initialOpened);
  }, []);

  useEffect(() => {
    if (initialOpened && !getAccordionVisibility(accordionName)) {
      toggleAccordionVisibility(accordionName);
    }
  }, [initialOpened]);

  useEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.children[0]) {
        const firstChild = contentRef.current.firstChild as HTMLElement | null;
        if (firstChild) {
          const rect = firstChild.getBoundingClientRect();
          setContentHeight(rect.height);
        }
      } else {
        const tempElement = document.createElement('div');
        tempElement.style.position = 'absolute';
        tempElement.style.opacity = '0';
        tempElement.innerHTML = children as string;

        document.body.appendChild(tempElement);

        const rect = tempElement.getBoundingClientRect();
        setContentHeight(rect.height);

        document.body.removeChild(tempElement);
      }
    }
  }, [contentRef, children, initialOpened]);

  return (
    <Container
      width={width}
      padding={padding}
      className={!getAccordionVisibility(accordionName) ? 'hoverable' : ''}
      onClick={() => {
        if (!getAccordionVisibility(accordionName)) {
          toggleAccordionVisibility(accordionName);
        }
      }}
    >
      <AccordionControlField
        disabled={disabled}
        disabledDropdown={disabledDropdown}
        height={controlFieldHeight}
        active={getAccordionVisibility(accordionName)}
        controlChildren={controlChildren}
        onClick={() => {
          if (getAccordionVisibility(accordionName)) {
            toggleAccordionVisibility(accordionName);
          }
        }}
      />
      <Content
        ref={contentRef}
        active={getAccordionVisibility(accordionName)}
        height={contentHeight}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Accordion;
