import React from 'react';
import { FormattedMessage } from 'react-intl';
import StatusCard from '../../StatusCard.tsx';
import { statusCardCommonMessages } from '../../libs/messages/status-card-common.messages.ts';
import SandClockAnimated from '../../../../shared/ui/IconsThemed/SandClockAnimated/SandClockAnimated.tsx';

const StatusCardPreparingOrder = () => {
  return (
    <StatusCard
      statusSrc={<SandClockAnimated />}
      title={
        <FormattedMessage {...statusCardCommonMessages.preparingOrderTitle} />
      }
      subTitle={
        <FormattedMessage
          {...statusCardCommonMessages.preparingOrderDescription}
        />
      }
    />
  );
};

export default StatusCardPreparingOrder;
