import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseCircle } from 'react-icons/io5';
import AppField from '../base/AppField.tsx';
import {
  RightElementContainer,
  SearchIconContainer,
} from './SearchField.styled.ts';
import { AppFieldProps } from '../base/AppField.types.ts';
import ButtonIconed from '../../Button/ButtonIconed/ButtonIconed.tsx';

interface SearchFieldProps extends AppFieldProps {
  onClearValue?: () => void;
}

const SearchField: FC<SearchFieldProps> = ({
  onClearValue,
  value,
  variant,
  errors,
  ...props
}) => {
  return (
    <AppField
      {...props}
      value={value}
      variant={variant}
      errors={errors}
      $leftElement={
        <SearchIconContainer>
          <AiOutlineSearch fontSize="2em" />
        </SearchIconContainer>
      }
      $rightElement={
        value &&
        value?.length > 0 && (
          <RightElementContainer className={`${errors?.length ? 'error' : ''}`}>
            <ButtonIconed
              onClick={onClearValue}
              width="3.2em"
              variant="flat"
              color="secondary"
            >
              <IoCloseCircle size="2.4em" />
            </ButtonIconed>
          </RightElementContainer>
        )
      }
    />
  );
};

export default SearchField;
