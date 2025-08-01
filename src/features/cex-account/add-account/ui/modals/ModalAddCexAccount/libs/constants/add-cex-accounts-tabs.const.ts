export const ADD_CEX_ACCOUNT_SCREENS = {
  SELECT_CEX: 'SELECT_CEX',
  ADD_ACCOUNT_FORM: 'ADD_ACCOUNT_FORM',
  SUCCESS: 'SUCCESS',
} as const;

export type AddCexAccountScreens =
  (typeof ADD_CEX_ACCOUNT_SCREENS)[keyof typeof ADD_CEX_ACCOUNT_SCREENS];

export const ADD_CEX_ACCOUNT_GO_BACKS: Record<string, AddCexAccountScreens> = {
  [ADD_CEX_ACCOUNT_SCREENS.ADD_ACCOUNT_FORM]:
    ADD_CEX_ACCOUNT_SCREENS.SELECT_CEX,
};
