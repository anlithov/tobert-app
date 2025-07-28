export const CHANGE_CEX_ACCOUNT_NAME_FIELDS = {
  name: 'name',
} as const;

export type UnlockCexAccountFields =
  (typeof CHANGE_CEX_ACCOUNT_NAME_FIELDS)[keyof typeof CHANGE_CEX_ACCOUNT_NAME_FIELDS];
