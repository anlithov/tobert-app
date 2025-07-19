import React, { FC } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import {
  Container,
  ControlField,
  Item,
  Title,
  Variants,
} from './MonthSelect.styled.ts';
import {
  eachYearOfInterval,
  endOfYear,
  format,
  isSameYear,
  startOfYear,
} from 'date-fns';
import addMonths from 'date-fns/addMonths';
import Divider from '../Divider/Divider.tsx';
import { useDropdownControl } from '../../molecules/PopupHelpers/providers/DropdownProvider/hooks/useDropdownControl.tsx';
import DropdownProvider from '../../molecules/PopupHelpers/providers/DropdownProvider/DropdownProvider.tsx';

type Props = {
  from: Date;
  to: Date;
  displayedMonth: Date;
  setDisplayedMonth: (date: Date) => void;
  fromDisabledDate?: Date;
  toDisabledDate?: Date;
};

const MonthSelect: FC<Props> = ({
  from,
  to,
  displayedMonth,
  setDisplayedMonth,
  fromDisabledDate,
  toDisabledDate,
}) => {
  const yearsArray = eachYearOfInterval({
    start: startOfYear(from),
    end: endOfYear(to),
  });

  const formattedFromDisabledDate =
    fromDisabledDate && addMonths(fromDisabledDate, 1);
  const formattedToDisabledDate =
    toDisabledDate && addMonths(toDisabledDate, -1);

  const handleSelectDate = (date: Date) => {
    if (
      formattedFromDisabledDate &&
      date.getTime() <= formattedFromDisabledDate.getTime()
    ) {
      setDisplayedMonth(formattedFromDisabledDate);
    } else if (
      formattedToDisabledDate &&
      date.getTime() >= formattedToDisabledDate.getTime()
    ) {
      setDisplayedMonth(formattedToDisabledDate);
    } else {
      setDisplayedMonth(date);
    }
  };

  const { ref, showDropdown, onClickProps } = useDropdownControl();

  return (
    <DropdownProvider
      ContainerComponent={Container}
      showDropdown={showDropdown}
      DropdownComponent={
        <Variants>
          {yearsArray.map((item, index) => {
            let disabled = false;

            if (formattedFromDisabledDate) {
              disabled =
                item.getTime() < formattedFromDisabledDate?.getTime() &&
                !isSameYear(item, formattedFromDisabledDate);
            } else if (formattedToDisabledDate) {
              disabled =
                item.getTime() > formattedToDisabledDate?.getTime() &&
                !isSameYear(item, formattedToDisabledDate);
            }

            return (
              <Item
                key={`year-${index}`}
                className={disabled ? 'disabled' : ''}
                onClick={() => handleSelectDate(item)}
              >
                <div>{format(item, 'yyyy')}</div>
              </Item>
            );
          })}
        </Variants>
      }
      dropdownPosition={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
    >
      <div
        ref={ref}
        onClick={onClickProps.handleOpen}
        style={{ width: '100%' }}
      >
        <ControlField>
          <Title>{format(displayedMonth, 'MMMM yyyy')}</Title>
          <Divider width="0.8em" />
          <BsFillCaretDownFill size="1em" />
        </ControlField>
      </div>
    </DropdownProvider>
  );
};

export default MonthSelect;
