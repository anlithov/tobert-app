import { DefaultTheme } from 'styled-components';
import { Mode } from '../../../../../app/providers/AppThemeProvider.tsx';

import { addAlpha } from '../../../../lib/utils/add-alpha-opacity.util.ts';

export const dragebleTheme = (theme: DefaultTheme) => {
  if (theme.mode === Mode.LIGHT) {
    return {
      dragebleScrollContainerBackground:
        'linear-gradient(-200deg, #e6f5f3, #d6d9e7)',
      dragebleScrollBarTrackContainerBackground:
        'linear-gradient(-200deg, #e6f5f3, #d6d9e7)',
      dragebleScrollBarThumbContainerBackground: addAlpha('#1278d6', 0.3),
      dragebleScrollBarCornerContainerBackground:
        'linear-gradient(-200deg, #e6f5f3, #d6d9e7)',
    };
  }

  return {
    dragebleScrollContainerBackground:
      'linear-gradient(-200deg, #152a28, #1e2131)',
    dragebleScrollBarTrackContainerBackground:
      'linear-gradient(-200deg, #152a28, #1e2131)',
    dragebleScrollBarThumbContainerBackground: addAlpha('#005fae', 0.3),
    dragebleScrollBarCornerContainerBackground:
      'linear-gradient(-200deg, #152a28, #1e2131)',
  };
};
