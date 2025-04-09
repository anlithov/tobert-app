import React from 'react';
import { CheckboxContainer } from '../../AccountRegisterForm.styled.ts';
import CheckboxWithLabel from '../../../../../../features/CheckboxWithLabel/CheckboxWithLabel';
import { useFormikContext } from 'formik';
import { RegisterValues } from '../../libs/types/register.types';
import { useUserRegisterCheckboxesLabels } from '../../libs/hooks/useUserRegisterCheckboxesLabels';

const RegisterCheckboxes = () => {
  const { values, setFieldValue, setFieldTouched } =
    useFormikContext<RegisterValues>();

  const checkboxes = useUserRegisterCheckboxesLabels();

  return (
    <CheckboxContainer>
      {checkboxes.map((item) => (
        <CheckboxWithLabel
          key={item.formikKey}
          label={item.label}
          isChecked={values[item.formikKey]}
          onChange={async () => {
            await setFieldTouched(item.formikKey);
            await setFieldValue(item.formikKey, !values[item.formikKey]);
          }}
        />
      ))}
    </CheckboxContainer>
  );
};

export default RegisterCheckboxes;
