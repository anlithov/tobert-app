import React, { FC } from 'react';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';
import StatusCard from '../../StatusCard.tsx';
import { Loading } from '../../../../atoms/Loading/Loading.tsx';

interface Props {
  title?: string;
  subTitle?: string;
}
const StatusCardLoadingData: FC<Props> = ({ title, subTitle }) => {
  return (
    <StatusCard
      statusSrc={<Loading size="7em" />}
      title={title ?? statusCardCommonMessages.loadingDataTitle}
      subTitle={subTitle ?? statusCardCommonMessages.loadingDataDescription}
    />
  );
};

export default StatusCardLoadingData;
