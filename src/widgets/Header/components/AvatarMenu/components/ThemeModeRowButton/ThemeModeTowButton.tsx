import React from 'react';
import AvatarMenuButton from '../../ui/AvatarMenuButton.tsx';
import { FormattedMessage } from 'react-intl';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { headerMessages } from '../../../../libs/messages/header.messages.ts';
import { useThemeStore } from '../../../../../../zolp/app/providers/AppThemeProvider.tsx';
import { THEME_MODES } from '../../../../../../zolp/app/theme/theme-modes.ts';

const ThemeModeTowButton = () => {
  const { setMode, mode } = useThemeStore();

  return (
    <AvatarMenuButton
      onClick={(e) => {
        e.stopPropagation();
        setMode(
          mode === THEME_MODES.light ? THEME_MODES.dark : THEME_MODES.light,
        );
      }}
      title={
        <span>
          <FormattedMessage {...headerMessages.toggleTheme} />
        </span>
      }
      iconButton={
        <div>
          {mode === THEME_MODES.light ? (
            <BsFillMoonStarsFill size="1.6em" />
          ) : (
            <BsSunFill size="2em" />
          )}
        </div>
      }
    />
  );
};

export default ThemeModeTowButton;
