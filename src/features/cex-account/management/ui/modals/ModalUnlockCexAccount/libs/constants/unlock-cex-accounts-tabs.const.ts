export const UNLOCK_CEX_ACCOUNT_SCREENS = {
  PASSWORD_FORM: 'PASSWORD_FORM',
  SUCCESS: 'SUCCESS',
} as const;

export type UnlockCexAccountScreens =
  (typeof UNLOCK_CEX_ACCOUNT_SCREENS)[keyof typeof UNLOCK_CEX_ACCOUNT_SCREENS];
