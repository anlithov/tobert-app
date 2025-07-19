import React, { useState } from 'react';
import { BoxInputs, Container } from './ShowcaseCheckBoxes.styled';
import Checkbox from '../../../../zolp/shared/ui/atoms/Checkbox/Checkbox.tsx';
import CheckboxWithLabel from '../../../../zolp/shared/ui/atoms/Checkbox/CheckboxWithLabel/CheckboxWithLabel.tsx';

const ShowcaseCheckBoxes = () => {
  const [value, setValue] = useState(true);
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(true);

  return (
    <Container>
      <BoxInputs width="330px">
        <h5>Disabled</h5>
        <CheckboxWithLabel
          type="checkbox"
          label="Novadash will NEVER contact you in any way!"
          onChange={() => setValue(!value)}
          isChecked={value}
          disabled
        />
      </BoxInputs>
      <BoxInputs width="330px">
        <h5>Right Icon</h5>
        <CheckboxWithLabel
          type="checkbox"
          label="NEVER give anyone your username & password!"
          onChange={() => setValue1(!value1)}
          isChecked={value1}
          checkboxPosition="right"
        />
      </BoxInputs>
      <BoxInputs width="330px">
        <h5>Left Icon</h5>
        <CheckboxWithLabel
          type="checkbox"
          label="Novadash doesn’t run promotions with signups or giveaways!"
          onChange={() => setValue2(!value2)}
          isChecked={value2}
        />
      </BoxInputs>
      <BoxInputs width="330px">
        <h5>Checkbox</h5>
        <Checkbox
          type="checkbox"
          onChange={() => setValue3(!value3)}
          isChecked={value3}
        />
      </BoxInputs>
    </Container>
  );
};

export default ShowcaseCheckBoxes;
