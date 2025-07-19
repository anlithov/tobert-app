import React from 'react';
import { MdStarOutline } from 'react-icons/md';
import ButtonIconed from '../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import { BoxButtons, Container } from './ShowcaseIconButtons.styled.ts';

const ShowcaseButtonIcons = () => {
  const icon = <MdStarOutline size="2em" />;
  return (
    <Container>
      <BoxButtons>
        <h5>Filled icon button (primary)</h5>
        <ButtonIconed color="primary" width="4em">
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Filled icon button (secondary)</h5>
        <ButtonIconed color="secondary" width="4em">
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Standard icon button (primary)</h5>
        <ButtonIconed width="4em" variant="flat">
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="flat" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="flat" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Standard icon button (secondary)</h5>
        <ButtonIconed color="secondary" width="4em" variant="flat">
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="flat" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="flat" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Tonal icon button (primary)</h5>
        <ButtonIconed width="4em" variant="tonal">
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="tonal" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="tonal" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Tonal icon button (secondary)</h5>
        <ButtonIconed color="secondary" width="4em" variant="tonal">
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="tonal" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="tonal" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Outlined icon button (primary)</h5>
        <ButtonIconed width="4em" variant="outlined">
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="outlined" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed width="4em" variant="outlined" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
      <BoxButtons>
        <h5>Outlined icon button (secondary)</h5>
        <ButtonIconed color="secondary" width="4em" variant="outlined">
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="outlined" active>
          {icon}
        </ButtonIconed>
        <ButtonIconed color="secondary" width="4em" variant="outlined" disabled>
          {icon}
        </ButtonIconed>
      </BoxButtons>
    </Container>
  );
};

export default ShowcaseButtonIcons;
