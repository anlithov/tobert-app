import React, { FC, useState } from 'react';
import DropdownList, {
  DropdownListItemProps,
} from '../../../../../../../../../../zolp/shared/ui/atoms/Dropdown/DropdownList/DropdownList.tsx';
import { useCexAccountsList } from '../../../../../../../../../cex-account/list/libs/hooks/use-cex-accounts-list.hook.ts';
import ImagesCorneredWithTitles from '../../../../../../../../../../zolp/shared/ui/atoms/ImageContainer/instances/ImagesCorneredWithTitles.tsx';
import Checkbox from '../../../../../../../../../../zolp/shared/ui/atoms/Checkbox/Checkbox.tsx';
import { shortDottedText } from '../../../../../../../../../../shared/lib/utils/short-dotted-text.util.ts';
import { useAtom } from 'jotai';
import { atomBotListCexAccountIdsFilter } from '../../../../../../model/bots-page.atom.ts';
import { ButtonCommon } from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonCommon/ButtonCommon.tsx';
import { Container } from './CexAccountsListSelectable.styles.ts';
import { RxCross2 } from 'react-icons/rx';
import ButtonIconed from '../../../../../../../../../../zolp/shared/ui/atoms/Button/ButtonIconed/ButtonIconed.tsx';
import Divider from '../../../../../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';

interface Props {
  onClose: () => void;
}
const CexAccountsListSelectable: FC<Props> = ({ onClose }) => {
  const [accountIds, setAccountIds] = useAtom(atomBotListCexAccountIdsFilter);
  const [tempAccountIds, setTempAccountIds] = useState(accountIds);

  const { list } = useCexAccountsList();

  const toggleAccount = (accountId: number) => {
    if (tempAccountIds.includes(accountId)) {
      setTempAccountIds(tempAccountIds.filter((id) => id !== accountId));
    } else {
      setTempAccountIds([...tempAccountIds, accountId]);
    }
  };

  const items: DropdownListItemProps[] = list.map((info) => ({
    active: tempAccountIds.includes(info.accountId),
    children: (
      <>
        <Checkbox
          isChecked={tempAccountIds.includes(info.accountId)}
          onClick={() => {
            toggleAccount(info.accountId);
          }}
        />
        <div
          style={{ fontSize: '0.9em', width: '100%' }}
          onClick={() => {
            toggleAccount(info.accountId);
          }}
        >
          <ImagesCorneredWithTitles
            title={info.name}
            subTitle={
              info.apiKey ? shortDottedText(info.apiKey, 5, 5) : '*****'
            }
            images={[
              {
                src: info.image,
              },
            ]}
          />
        </div>
      </>
    ),
  }));

  return (
    <DropdownList
      maxHeight="15em"
      items={[...items, ...items, ...items, ...items]}
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
              setAccountIds(tempAccountIds);
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

export default CexAccountsListSelectable;
