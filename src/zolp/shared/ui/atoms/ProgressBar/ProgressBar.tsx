import React from 'react';
import { Container } from './ProgressBar.styled.ts';

const ProgressBar = () => {
  return (
    <Container>
      <div className="line"></div>
      <div className="subline inc"></div>
      <div className="subline dec"></div>
    </Container>
  );
};

export default ProgressBar;
