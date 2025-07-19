import React from 'react';
import { FormattedMessage } from 'react-intl';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';
import StatusCard from '../../StatusCard.tsx';
import LoadingIcon from '../../../../atoms/IconsThemed/Loading/LoadingIcon.tsx';

const StatusCardSubmissionSuccessWait = () => {
  return (
    <StatusCard
      statusSrc={<LoadingIcon />}
      title={
        <FormattedMessage
          {...statusCardCommonMessages.submissionSwapSuccessTitle}
        />
      }
      subTitle={
        <FormattedMessage
          {...statusCardCommonMessages.submissionSwapSuccessDescription}
        />
      }
    />
  );
};

export default StatusCardSubmissionSuccessWait;
