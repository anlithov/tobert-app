import React from 'react';
import StatusCard from '../../StatusCard.tsx';
import LoadingIcon from '../../../../shared/ui/IconsThemed/Loading/LoadingIcon.tsx';
import { FormattedMessage } from 'react-intl';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';

const StatusCardProcessingOrder = () => {
  return (
    <StatusCard
      statusSrc={<LoadingIcon />}
      title={
        <FormattedMessage {...statusCardCommonMessages.processingOrderTitle} />
      }
      subTitle={
        <FormattedMessage
          {...statusCardCommonMessages.processingOrderDescription}
        />
      }
    />
  );
};

export default StatusCardProcessingOrder;
