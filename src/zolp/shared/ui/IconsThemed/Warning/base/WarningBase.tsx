import React, { FC } from 'react';
import Warning from '../../../../../../public/svgs/warning-status-icon.svg';
import { SvgTypes } from '../../types/svg.types.ts';

const WarningBase: FC<SvgTypes> = (props) => {
  return <Warning {...props} />;
};

export default WarningBase;
