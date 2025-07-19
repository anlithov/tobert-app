import React, { FC } from 'react';
import WarningGrey from '../../../../atoms/IconsThemed/Warning/WarningGrey.tsx';
import StatusCard from '../../StatusCard.tsx';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';

interface Props {
  title?: string;
  subTitle?: string;
}
const StatusCardNotFound: FC<Props> = ({ title, subTitle }) => {
  return (
    <StatusCard
      statusSrc={<WarningGrey />}
      title={title ?? statusCardCommonMessages.notFoundTitle}
      subTitle={subTitle ?? statusCardCommonMessages.notFoundDescription}
    />
  );
};

export default StatusCardNotFound;
