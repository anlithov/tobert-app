import React, { FC, PropsWithChildren, useRef, useState } from 'react';
import { ScrollContainer } from './Drageble.styled.ts';

interface Props1 extends PropsWithChildren {
  rootClass: string;
}
const Draggable: FC<Props1> = ({ rootClass = '', children }) => {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  // @ts-ignore
  const handleDragStart = (e) => {
    if (!ourRef.current) return;
    // @ts-ignore
    const slider = ourRef.current.children[0] as HTMLDivElement;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = 'default';
  };
  // @ts-ignore
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    // @ts-ignore
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;

    // @ts-ignore
    ourRef.current.children[0].scrollLeft =
      mouseCoords.current.scrollLeft - walkX;
    // @ts-ignore
    ourRef.current.children[0].scrollTop =
      mouseCoords.current.scrollTop - walkY;
  };

  return (
    <ScrollContainer
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass}
    >
      {children}
    </ScrollContainer>
  );
};

export default Draggable;
