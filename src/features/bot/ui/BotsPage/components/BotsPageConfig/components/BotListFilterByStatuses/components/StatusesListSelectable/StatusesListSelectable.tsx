import React, { FC, useState } from 'react';
import DropdownList, {
  DropdownListItemProps,
} from '../../../../../../../../../../zolp/shared/ui/atoms/Dropdown/DropdownList/DropdownList.tsx';
import ImagesCorneredWithTitles from '../../../../../../../../../../zolp/shared/ui/atoms/ImageContainer/instances/ImagesCorneredWithTitles.tsx';
import Checkbox from '../../../../../../../../../../zolp/shared/ui/atoms/Checkbox/Checkbox.tsx';
import { useAtom } from 'jotai';
import { atomBotListStatusesFilter } from '../../../../../../model/bots-page.atom.ts';
import { ButtonCommon } from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { Container } from './StatusesListSelectable.styles.ts';
import { RxCross2 } from 'react-icons/rx';
import ButtonIconed from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import Divider from '../../../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';
import { BotInternalStatus } from '../../../../../../../../../../__graphql/generated.ts';

interface Props {
  onClose: () => void;
}
const StatusesListSelectable: FC<Props> = ({ onClose }) => {
  const [statuses, setStatuses] = useAtom(atomBotListStatusesFilter);
  const [temp, setTemp] = useState(statuses);

  const toggleStatus = (status: BotInternalStatus) => {
    if (temp.includes(status)) {
      setTemp(temp.filter((id) => id !== status));
    } else {
      setTemp([...temp, status]);
    }
  };

  const items: DropdownListItemProps[] = Object.values(BotInternalStatus).map(
    (status) => ({
      active: temp.includes(status),
      children: (
        <>
          <Checkbox
            isChecked={temp.includes(status)}
            onClick={() => {
              toggleStatus(status);
            }}
          />
          <div
            style={{ fontSize: '0.9em', width: '100%' }}
            onClick={() => {
              toggleStatus(status);
            }}
          >
            <ImagesCorneredWithTitles title={status} images={[]} />
          </div>
        </>
      ),
    }),
  );

  return (
    <DropdownList
      maxHeight="15em"
      items={items}
      BottomComponent={
        <Container>
          <ButtonCommon
            height="2.6em"
            text="Apply"
            borderRadius="1em"
            variant="filled"
            width="8em"
            onClick={() => {
              onClose();
              setStatuses(temp);
            }}
          />
          <Divider width="0.5em" />
          <ButtonIconed
            height="2.6em"
            borderRadius="1em"
            width="4em"
            variant="outlined"
            onClick={() => {
              onClose();
            }}
          >
            <RxCross2 size="1.2em" />
          </ButtonIconed>
        </Container>
      }
    />
  );
};

export default StatusesListSelectable;
