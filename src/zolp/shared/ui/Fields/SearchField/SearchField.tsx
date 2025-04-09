import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseCircle } from 'react-icons/io5';
import IconButton from '../../Button/ButtonIconed/IconButton';
import AppField from '../base/AppField';
import {
  RightElementContainer,
  SearchIconContainer,
} from './SearchField.styled';
import { AppFieldProps } from '../base/AppField.types';

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
            <IconButton
              onClick={onClearValue}
              width="3.2em"
              variant="flat"
              color="secondary"
            >
              <IoCloseCircle size="2.4em" />
            </IconButton>
          </RightElementContainer>
        )
      }
    />
  );
};

export default SearchField;
