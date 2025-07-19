import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';
import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';
import { appFieldTheme } from '../../Fields/base/AppField.theme.ts';
import { dropdownFieldTheme } from './DropdownControlField.theme.ts';
import { DROPDOWN_FIELD_VARIANTS } from '../../../templates/PopupHelpers/instances/DropdownFieldAndListSlot/libs/constants/dropdown-field-variants.ts';

export const Container = styled.div<{
  padding?: string;
  height?: string;
  minWidth: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;

  min-width: ${({ minWidth }) => minWidth};
  height: ${(props) => props?.height ?? '5.6em'};
  border-radius: 1em;
  padding: ${(props) => props?.padding ?? '0.2em 1.2em 0.2em 0'};
  transition: 0.2s;

  .border-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    border: ${({ theme }) =>
      `${addAlpha(appFieldTheme(theme).hover, 0)} solid 0.2em;`};
    transition: 0.1s;
  }

  &.${DROPDOWN_FIELD_VARIANTS.OUTLINED} {
    border-color: ${({ theme }) =>
      appFieldTheme(theme).appFieldInputContainerOutlinedFieldBorder};
    color: ${({ theme }) =>
      appFieldTheme(theme).appFieldInputContainerOutlinedFieldColor};

    &:hover {
      .border-container {
        ${(props) =>
          `border: ${appFieldTheme(props.theme).hover} solid 0.2em !important;`}
      }
    }

    &.active {
      border: 0.1em solid
        ${({ theme }) =>
          appFieldTheme(theme)
            .appFieldInputContainerOutlinedFieldFocusWithinBorder};
    }
  }

  &.${DROPDOWN_FIELD_VARIANTS.FILLED} {
    background: ${({ theme }) =>
      dropdownFieldTheme(theme).backgroundFilledColor};
    .border-container {
      border-color: ${({ theme }) =>
        addAlpha(dropdownFieldTheme(theme).backgroundFilledColor, 0)};
    }

    &:hover {
      .border-container {
        ${(props) =>
          `border: ${addAlpha(
            appFieldTheme(props.theme).hover,
            0.8,
          )} solid 0.1em !important;`}
      }
    }

    &.active {
      .border-container {
        border: 0.2em solid
          ${({ theme }) =>
            addAlpha(
              appFieldTheme(theme)
                .appFieldInputContainerFilledFieldFocusedBorder,
              1,
            )}!important;
      }
    }
  }

  &.${DROPDOWN_FIELD_VARIANTS.FILLED_ALT} {
    background: ${({ theme }) =>
      dropdownFieldTheme(theme).backgroundFilledAltColor};
    border-color: ${({ theme }) =>
      dropdownFieldTheme(theme).backgroundFilledAltColor};

    &:hover {
      background: ${({ theme }) =>
        dropdownFieldTheme(theme).backgroundFilledAltHoverColor};
    }

    &.active {
      border-color: ${({ theme }) =>
        addAlpha(
          appFieldTheme(theme).appFieldInputContainerFilledFieldFocusedBorder,
          0.8,
        )};
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Label = styled.div`
  font-size: 1.4em;
`;

export const Icon = styled(BiChevronDown)`
  transition: 0.3s ease;
  margin-left: 1em;
  &.up {
    transform: rotate(180deg);
  }
`;
