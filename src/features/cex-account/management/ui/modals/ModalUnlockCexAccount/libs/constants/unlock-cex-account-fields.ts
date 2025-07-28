export const UNLOCK_CEX_ACCOUNT_FIELDS = {
  password: 'password',
} as const;

export type UnlockCexAccountFields =
  (typeof UNLOCK_CEX_ACCOUNT_FIELDS)[keyof typeof UNLOCK_CEX_ACCOUNT_FIELDS];
