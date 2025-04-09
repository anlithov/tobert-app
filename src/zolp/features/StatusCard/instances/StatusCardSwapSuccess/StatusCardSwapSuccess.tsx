import React from 'react';
import { FormattedMessage } from 'react-intl';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';
import StatusCard from '../../StatusCard.tsx';
import SuccessIcon from '../../../../shared/ui/IconsThemed/Success/SuccessIcon.tsx';

const StatusCardSwapSuccess = () => {
  return (
    <StatusCard
      statusSrc={<SuccessIcon />}
      title={<FormattedMessage {...statusCardCommonMessages.successTitle} />}
      subTitle={
        <FormattedMessage {...statusCardCommonMessages.successDescription} />
      }
    />
  );
};

export default StatusCardSwapSuccess;
