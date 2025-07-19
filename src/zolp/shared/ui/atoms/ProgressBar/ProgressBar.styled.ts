import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  overflow: hidden;
  animation: appear 1s normal forwards ease-in-out;
  .line {
    position: absolute;
    background: ${({ theme }) => theme.palette.secondary600};
    width: 150%;
    height: 5px;
  }

  .subline {
    position: absolute;
    background: ${({ theme }) => theme.palette.primary500};
    height: 5px;
  }
  .inc {
    animation: increase 2s infinite;
  }
  .dec {
    animation: decrease 2s 0.5s infinite;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 100%;
    }
  }
  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
`;
