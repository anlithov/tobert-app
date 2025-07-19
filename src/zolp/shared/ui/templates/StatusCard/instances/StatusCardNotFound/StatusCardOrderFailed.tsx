import React from 'react';
import AlertIcon from '../../../../atoms/IconsThemed/Alert/AlertIcon.tsx';
import StatusCard from '../../StatusCard.tsx';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';

const StatusCardOrderFailed = () => {
  return (
    <StatusCard
      statusSrc={<AlertIcon />}
      title={statusCardCommonMessages.notFoundTitle}
      subTitle={statusCardCommonMessages.notFoundDescription}
    />
  );
};

export default StatusCardOrderFailed;
