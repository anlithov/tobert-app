import React, { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { Box, Container } from './ShowcaseTextField.styled';
import AppField from '../../../../zolp/shared/ui/atoms/Fields/base/AppField.tsx';

const ShowcaseTextField = () => {
  const [valueInput, setValueInput] = useState<string>('66');
  const [errorInput, setErrorInput] = useState<string[]>([]);
  const errorMock = 'Word';

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errors: string[] = [];
    setValueInput(e.target.value);

    if (/^[a-z]*$/.test(e.target.value)) {
      errors.push('Must have at least 1 capital symbol');
    }
    if (e.target.value.length === 0) {
      errors.push('Empty field');
    } else if (e.target.value != errorMock) {
      errors.push("Enter 'Word");
    }
    setErrorInput(errors);
  };

  return (
    <Container>
      <Box>
        <h5>Field with two icons</h5>
        <AppField
          value={valueInput}
          onChange={onInputChange}
          errors={errorInput}
          minCharacters={4}
          helperText="Enter your name!"
          height="5.6em"
          variant="filled"
          placeholder="Your name is..."
          $leftElement={<BiInfoCircle fontSize="2.4em" />}
          $rightElement={<BiInfoCircle fontSize="2.4em" />}
        />
      </Box>
      <Box>
        <h5>Field w/o icons</h5>
        <AppField
          value={valueInput}
          onChange={onInputChange}
          errors={errorInput}
          minCharacters={4}
          helperText="Enter your name!"
          height="5.6em"
          variant="outlined"
          placeholder="Your name is..."
          required
        />
      </Box>
      <Box>
        <h5>Field w/o icons</h5>
        <AppField
          value={valueInput}
          onChange={onInputChange}
          errors={errorInput}
          minCharacters={4}
          helperText="Enter your name!"
          height="5.6em"
          variant="outlined"
          placeholder="Your name is..."
          required
        />
      </Box>
    </Container>
  );
};

export default ShowcaseTextField;
