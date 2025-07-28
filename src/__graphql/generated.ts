import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AccountAuthMutations = {
  __typename?: 'AccountAuthMutations';
  login: AccountAuthedOutput;
  register: AccountAuthedOutput;
};


export type AccountAuthMutationsLoginArgs = {
  input: AccountLoginInput;
};


export type AccountAuthMutationsRegisterArgs = {
  input: AccountRegisterInput;
};

export type AccountAuthedOutput = {
  __typename?: 'AccountAuthedOutput';
  accountId: Scalars['Int']['output'];
  jwtToken: Scalars['String']['output'];
  nick: Scalars['String']['output'];
};

export type AccountGeneralMutations = {
  __typename?: 'AccountGeneralMutations';
  checkNameAvailability: AccountNameAvailabilityOutput;
};


export type AccountGeneralMutationsCheckNameAvailabilityArgs = {
  input: CheckAccountNameAvailabilityInput;
};

export type AccountLoginInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AccountManageMutations = {
  __typename?: 'AccountManageMutations';
  delete: Scalars['String']['output'];
};

export type AccountMutations = {
  __typename?: 'AccountMutations';
  auth: AccountAuthMutations;
  general: AccountGeneralMutations;
  manage: AccountManageMutations;
};

export type AccountNameAvailabilityOutput = {
  __typename?: 'AccountNameAvailabilityOutput';
  isAvailable: Scalars['Boolean']['output'];
};

export type AccountQueries = {
  __typename?: 'AccountQueries';
  me: AccountAuthedOutput;
};

export type AccountRegisterInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
  registerCode: Scalars['String']['input'];
};

export type BotDcaCombinedIdOutput = {
  __typename?: 'BotDcaCombinedIdOutput';
  accountRowId: Scalars['Int']['output'];
  botRowId: Scalars['Int']['output'];
  cexAccountRowId: Scalars['Int']['output'];
};

export type BotMutations = {
  __typename?: 'BotMutations';
  dca: DcaBotMutations;
};

export type CancelDcaBotTriggerInput = {
  triggerId: Scalars['Int']['input'];
};

export type CanceledBotDcaTriggerOutput = {
  __typename?: 'CanceledBotDcaTriggerOutput';
  triggerId: Scalars['Int']['output'];
};

export type CexAccountAndJwt = {
  cexAccountId: Scalars['Int']['input'];
  jwtCexAccount: Scalars['String']['input'];
};

export type CexAccountAuthMutations = {
  __typename?: 'CexAccountAuthMutations';
  login: CexAccountJwtOutput;
};


export type CexAccountAuthMutationsLoginArgs = {
  input: CexAccountLoginInput;
};

export type CexAccountGeneralMutations = {
  __typename?: 'CexAccountGeneralMutations';
  checkNameAvailability: CexAccountNameAvailabilityOutput;
};


export type CexAccountGeneralMutationsCheckNameAvailabilityArgs = {
  input: CheckCexAccountNameAvailabilityInput;
};

export type CexAccountIdOutput = {
  __typename?: 'CexAccountIdOutput';
  cexAccountId: Scalars['Int']['output'];
};

export type CexAccountJwtOutput = {
  __typename?: 'CexAccountJwtOutput';
  jwtToken: Scalars['String']['output'];
  meta: CexAccountMetaOutput;
};

export type CexAccountLoginInput = {
  cexAccountId: Scalars['Int']['input'];
  cexAccountPassword: Scalars['String']['input'];
  totpCode?: InputMaybe<Scalars['String']['input']>;
};

export type CexAccountManageMutations = {
  __typename?: 'CexAccountManageMutations';
  changeName: CexAccountIdOutput;
  create: CexAccountJwtOutput;
  delete: CexAccountIdOutput;
};


export type CexAccountManageMutationsChangeNameArgs = {
  input: ChangeCexAccountNameInput;
};


export type CexAccountManageMutationsCreateArgs = {
  input: CreateCexAccountInput;
};


export type CexAccountManageMutationsDeleteArgs = {
  cexAccountId: Scalars['Int']['input'];
};

export type CexAccountMetaOutput = {
  __typename?: 'CexAccountMetaOutput';
  accountId: Scalars['Int']['output'];
  apiKey?: Maybe<Scalars['String']['output']>;
  cexAccountId: Scalars['Int']['output'];
  cexName: CexName;
  image?: Maybe<Scalars['String']['output']>;
  isJwtValid: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CexAccountMutations = {
  __typename?: 'CexAccountMutations';
  auth: CexAccountAuthMutations;
  general: CexAccountGeneralMutations;
  manage: CexAccountManageMutations;
};

export type CexAccountNameAvailabilityOutput = {
  __typename?: 'CexAccountNameAvailabilityOutput';
  isAvailable: Scalars['Boolean']['output'];
};

export type CexAccountQueries = {
  __typename?: 'CexAccountQueries';
  list: Array<CexAccountMetaOutput>;
};


export type CexAccountQueriesListArgs = {
  input: Array<CexAccountAndJwt>;
};

export enum CexName {
  Binance = 'BINANCE',
  Bybit = 'BYBIT'
}

export type ChangeCexAccountNameInput = {
  name: Scalars['String']['input'];
};

export type CheckAccountNameAvailabilityInput = {
  name: Scalars['String']['input'];
};

export type CheckCexAccountNameAvailabilityInput = {
  name: Scalars['String']['input'];
};

export type CreateBotDcaPriceDropTriggerOutput = {
  __typename?: 'CreateBotDcaPriceDropTriggerOutput';
  triggerId: Scalars['Int']['output'];
};

export type CreateBotDcaTrailingPriceDropTriggerOutput = {
  __typename?: 'CreateBotDcaTrailingPriceDropTriggerOutput';
  triggerId: Scalars['Int']['output'];
};

export type CreateCexAccountInput = {
  cexAccountPassword: Scalars['String']['input'];
  cexName: CexName;
  encryptedApiKey: Scalars['String']['input'];
  encryptedApiSecret: Scalars['String']['input'];
  encryptedTotpSecret?: InputMaybe<Scalars['String']['input']>;
  ivHex: Scalars['String']['input'];
  name: Scalars['String']['input'];
  saltHex: Scalars['String']['input'];
};

export type CreateDcaBotInput = {
  buyConfig: DcaBuyConfigInput;
  initialBuyConfig?: InputMaybe<DcaInitialBuyConfigInput>;
  initialTriggers?: InputMaybe<DcaInitialTriggersInput>;
  name: Scalars['String']['input'];
  testMode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDcaBotPriceDropTriggerInput = {
  activeEffect: DcaBotTriggerActiveEffect;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  botId: Scalars['Int']['input'];
  executionPrice: Scalars['Float']['input'];
  position: DcaBotTriggerPosition;
  symbol: Scalars['String']['input'];
};

export type CreateDcaBotTrailingPriceDropTriggerInput = {
  activeEffect: DcaBotTriggerActiveEffect;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  botId: Scalars['Int']['input'];
  percentageDrop: Scalars['Float']['input'];
  position: DcaBotTriggerPosition;
  symbol: Scalars['String']['input'];
};

export type DcaBotIdInput = {
  botId: Scalars['Int']['input'];
};

export type DcaBotManageMutations = {
  __typename?: 'DcaBotManageMutations';
  create: BotDcaCombinedIdOutput;
  dca: DcaBotMutations;
  pause: BotDcaCombinedIdOutput;
  resume: BotDcaCombinedIdOutput;
  stop: BotDcaCombinedIdOutput;
  updateConfig: BotDcaCombinedIdOutput;
};


export type DcaBotManageMutationsCreateArgs = {
  input: CreateDcaBotInput;
};


export type DcaBotManageMutationsPauseArgs = {
  input: DcaBotIdInput;
};


export type DcaBotManageMutationsResumeArgs = {
  input: DcaBotIdInput;
};


export type DcaBotManageMutationsStopArgs = {
  input: DcaBotIdInput;
};


export type DcaBotManageMutationsUpdateConfigArgs = {
  input: DcaUpdateBuyConfigInput;
};

export type DcaBotMutations = {
  __typename?: 'DcaBotMutations';
  manage: DcaBotManageMutations;
  trigger: DcaBotTriggerMutations;
};

export type DcaBotPriceDropTriggerManageMutations = {
  __typename?: 'DcaBotPriceDropTriggerManageMutations';
  create: CreateBotDcaPriceDropTriggerOutput;
  update: CreateBotDcaPriceDropTriggerOutput;
};


export type DcaBotPriceDropTriggerManageMutationsCreateArgs = {
  input: CreateDcaBotPriceDropTriggerInput;
};


export type DcaBotPriceDropTriggerManageMutationsUpdateArgs = {
  input: UpdateDcaBotPriceDropTriggerInput;
};

export type DcaBotTrailingPriceDropTriggerManageMutations = {
  __typename?: 'DcaBotTrailingPriceDropTriggerManageMutations';
  create: CreateBotDcaTrailingPriceDropTriggerOutput;
  update: CreateBotDcaPriceDropTriggerOutput;
};


export type DcaBotTrailingPriceDropTriggerManageMutationsCreateArgs = {
  input: CreateDcaBotTrailingPriceDropTriggerInput;
};


export type DcaBotTrailingPriceDropTriggerManageMutationsUpdateArgs = {
  input: UpdateDcaBotTrailingPriceDropTriggerInput;
};

export enum DcaBotTriggerActiveEffect {
  ForbiddenDcaBuySession = 'FORBIDDEN_DCA_BUY_SESSION',
  ForbiddenDcaSymbolsListBuyOrders = 'FORBIDDEN_DCA_SYMBOLS_LIST_BUY_ORDERS',
  None = 'NONE'
}

export type DcaBotTriggerManageMutations = {
  __typename?: 'DcaBotTriggerManageMutations';
  cancel: CanceledBotDcaTriggerOutput;
  priceDrop: DcaBotPriceDropTriggerManageMutations;
  trailingPriceDrop: DcaBotTrailingPriceDropTriggerManageMutations;
};


export type DcaBotTriggerManageMutationsCancelArgs = {
  input: CancelDcaBotTriggerInput;
};

export type DcaBotTriggerMutations = {
  __typename?: 'DcaBotTriggerMutations';
  manage: DcaBotTriggerManageMutations;
};

export enum DcaBotTriggerPosition {
  AfterBuy = 'AFTER_BUY',
  AfterInitialBuy = 'AFTER_INITIAL_BUY',
  Immediate = 'IMMEDIATE'
}

export type DcaBuyConfigInput = {
  cronPattern: Scalars['String']['input'];
  firstBuyQuoteAmount: Scalars['Float']['input'];
  multiplierSchema: DcaMultiplierSchema;
  multiplierStep: Scalars['Float']['input'];
  skipBuyBudgetLimit?: InputMaybe<Scalars['Float']['input']>;
  skipBuyRoiLessOrEqual?: InputMaybe<Scalars['Float']['input']>;
  symbolConfigs: Array<DcaBuySymbolConfigInput>;
};

export type DcaBuyConfigOptionalInput = {
  baseAmount?: InputMaybe<Scalars['Float']['input']>;
  cronPattern?: InputMaybe<Scalars['String']['input']>;
  multiplierSchema?: InputMaybe<DcaMultiplierSchema>;
  multiplierStep?: InputMaybe<Scalars['Float']['input']>;
  stopBuyBudgetLimit?: InputMaybe<Scalars['Float']['input']>;
  stopBuyRoiLessOrEqual?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<DcaUnit>;
};

export type DcaBuySymbolConfigInput = {
  allocationRatio: Scalars['Float']['input'];
  stopBuyBudgetLimit?: InputMaybe<Scalars['Float']['input']>;
  stopBuyRoiLessOrEqual?: InputMaybe<Scalars['Float']['input']>;
  symbol: Scalars['String']['input'];
};

export type DcaInitialBuyConfigInput = {
  quoteAmount: Scalars['Float']['input'];
  symbolConfigs: Array<DcaInitialBuySymbolConfigInput>;
};

export type DcaInitialBuySymbolConfigInput = {
  allocationRatio: Scalars['Float']['input'];
  symbol: Scalars['String']['input'];
};

export type DcaInitialTriggersInput = {
  priceDropTriggers?: InputMaybe<Array<DcaSymbolPriceDropTriggerInput>>;
  trailingPriceDropTriggers?: InputMaybe<Array<DcaTrailingPriceDropTriggerInput>>;
};

export enum DcaMultiplierSchema {
  /**
   * - Step is amount
   * - e.g. step 100 => 100, 200, 300, 400, 500, 600 ...
   * - *last order amount plus (step amount)
   */
  Arithmetic = 'ARITHMETIC',
  Disabled = 'DISABLED',
  /**
   * - Step is X multiplier
   * - e.g. step 2 => 100, 200 (100x2), 400(200x2), 800(400x2), 1600(800x2) ...
   * - *multiply last order amount
   */
  Exponential = 'EXPONENTIAL',
  /**
   * - Step is X multiplier
   * - e.g. step 2 => 100, 200 (100x2), 600((100+200)x2), 1800((100+200+600)x2) ...
   * - *multiply sum of all prev order amounts
   */
  Martingale = 'MARTINGALE'
}

export type DcaSymbolPriceDropTriggerInput = {
  activeEffect: DcaBotTriggerActiveEffect;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  executionPrice: Scalars['Float']['input'];
  position: DcaBotTriggerPosition;
  symbol: Scalars['String']['input'];
};

export type DcaTrailingPriceDropTriggerInput = {
  activeEffect: DcaBotTriggerActiveEffect;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  percentageDrop: Scalars['Float']['input'];
  position: DcaBotTriggerPosition;
  symbol: Scalars['String']['input'];
};

export enum DcaUnit {
  /** e.g. BTC */
  BaseCoin = 'BASE_COIN',
  /** e.g. USDT */
  QuoteCoin = 'QUOTE_COIN'
}

export type DcaUpdateBuyConfigInput = {
  botId: Scalars['Int']['input'];
  buyConfigUpdates: DcaBuyConfigOptionalInput;
};

export type GeneralQueries = {
  __typename?: 'GeneralQueries';
  publicKey: Scalars['String']['output'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  account: AccountMutations;
  bot: BotMutations;
  cexAccount: CexAccountMutations;
  ping: Scalars['String']['output'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  account: AccountQueries;
  cexAccount: CexAccountQueries;
  general: GeneralQueries;
  ping: Scalars['String']['output'];
};

export type UpdateDcaBotPriceDropTriggerInput = {
  activeEffect?: InputMaybe<DcaBotTriggerActiveEffect>;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  executionPrice?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<DcaBotTriggerPosition>;
  triggerId: Scalars['Int']['input'];
};

export type UpdateDcaBotTrailingPriceDropTriggerInput = {
  activeEffect?: InputMaybe<DcaBotTriggerActiveEffect>;
  activeEffectForbiddenBuySymbols?: InputMaybe<Array<Scalars['String']['input']>>;
  percentageDrop?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<DcaBotTriggerPosition>;
  triggerId: Scalars['Int']['input'];
};

export type AccountLoginMutationVariables = Exact<{
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AccountLoginMutation = { __typename?: 'MutationRoot', account: { __typename?: 'AccountMutations', auth: { __typename?: 'AccountAuthMutations', login: { __typename?: 'AccountAuthedOutput', accountId: number, nick: string, jwtToken: string } } } };

export type AccountRegisterMutationVariables = Exact<{
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
  registerCode: Scalars['String']['input'];
}>;


export type AccountRegisterMutation = { __typename?: 'MutationRoot', account: { __typename?: 'AccountMutations', auth: { __typename?: 'AccountAuthMutations', register: { __typename?: 'AccountAuthedOutput', accountId: number, nick: string, jwtToken: string } } } };

export type CheckAccountNickAvailabilityMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CheckAccountNickAvailabilityMutation = { __typename?: 'MutationRoot', account: { __typename?: 'AccountMutations', general: { __typename?: 'AccountGeneralMutations', checkNameAvailability: { __typename?: 'AccountNameAvailabilityOutput', isAvailable: boolean } } } };

export type CheckCexAccountNameMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CheckCexAccountNameMutation = { __typename?: 'MutationRoot', cexAccount: { __typename?: 'CexAccountMutations', general: { __typename?: 'CexAccountGeneralMutations', checkNameAvailability: { __typename?: 'CexAccountNameAvailabilityOutput', isAvailable: boolean } } } };

export type CreateCexAccountMutationVariables = Exact<{
  input: CreateCexAccountInput;
}>;


export type CreateCexAccountMutation = { __typename?: 'MutationRoot', cexAccount: { __typename?: 'CexAccountMutations', manage: { __typename?: 'CexAccountManageMutations', create: { __typename?: 'CexAccountJwtOutput', jwtToken: string, meta: { __typename?: 'CexAccountMetaOutput', accountId: number, cexAccountId: number, name: string, cexName: CexName } } } } };

export type CexAccountsListQueryVariables = Exact<{
  input: Array<CexAccountAndJwt> | CexAccountAndJwt;
}>;


export type CexAccountsListQuery = { __typename?: 'QueryRoot', cexAccount: { __typename?: 'CexAccountQueries', list: Array<{ __typename?: 'CexAccountMetaOutput', accountId: number, cexAccountId: number, cexName: CexName, name: string, isJwtValid: boolean, apiKey?: string | null, image?: string | null }> } };

export type ChangeCexAccountNameMutationVariables = Exact<{
  input: ChangeCexAccountNameInput;
}>;


export type ChangeCexAccountNameMutation = { __typename?: 'MutationRoot', cexAccount: { __typename?: 'CexAccountMutations', manage: { __typename?: 'CexAccountManageMutations', changeName: { __typename?: 'CexAccountIdOutput', cexAccountId: number } } } };

export type DeleteCexAccountMutationVariables = Exact<{
  input: Scalars['Int']['input'];
}>;


export type DeleteCexAccountMutation = { __typename?: 'MutationRoot', cexAccount: { __typename?: 'CexAccountMutations', manage: { __typename?: 'CexAccountManageMutations', delete: { __typename?: 'CexAccountIdOutput', cexAccountId: number } } } };

export type LoginCexAccountMutationVariables = Exact<{
  input: CexAccountLoginInput;
}>;


export type LoginCexAccountMutation = { __typename?: 'MutationRoot', cexAccount: { __typename?: 'CexAccountMutations', auth: { __typename?: 'CexAccountAuthMutations', login: { __typename?: 'CexAccountJwtOutput', jwtToken: string, meta: { __typename?: 'CexAccountMetaOutput', accountId: number, cexAccountId: number, name: string, cexName: CexName } } } } };


export const AccountLoginDocument = gql`
    mutation accountLogin($name: String!, $password: String!) {
  account {
    auth {
      login(input: {name: $name, password: $password}) {
        accountId
        nick
        jwtToken
      }
    }
  }
}
    `;
export type AccountLoginMutationFn = Apollo.MutationFunction<AccountLoginMutation, AccountLoginMutationVariables>;

/**
 * __useAccountLoginMutation__
 *
 * To run a mutation, you first call `useAccountLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountLoginMutation, { data, loading, error }] = useAccountLoginMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAccountLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AccountLoginMutation, AccountLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AccountLoginMutation, AccountLoginMutationVariables>(AccountLoginDocument, options);
      }
export type AccountLoginMutationHookResult = ReturnType<typeof useAccountLoginMutation>;
export type AccountLoginMutationResult = Apollo.MutationResult<AccountLoginMutation>;
export type AccountLoginMutationOptions = Apollo.BaseMutationOptions<AccountLoginMutation, AccountLoginMutationVariables>;
export const AccountRegisterDocument = gql`
    mutation accountRegister($name: String!, $password: String!, $passwordConfirm: String!, $registerCode: String!) {
  account {
    auth {
      register(
        input: {name: $name, password: $password, passwordConfirm: $passwordConfirm, registerCode: $registerCode}
      ) {
        accountId
        nick
        jwtToken
      }
    }
  }
}
    `;
export type AccountRegisterMutationFn = Apollo.MutationFunction<AccountRegisterMutation, AccountRegisterMutationVariables>;

/**
 * __useAccountRegisterMutation__
 *
 * To run a mutation, you first call `useAccountRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRegisterMutation, { data, loading, error }] = useAccountRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *      registerCode: // value for 'registerCode'
 *   },
 * });
 */
export function useAccountRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AccountRegisterMutation, AccountRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AccountRegisterMutation, AccountRegisterMutationVariables>(AccountRegisterDocument, options);
      }
export type AccountRegisterMutationHookResult = ReturnType<typeof useAccountRegisterMutation>;
export type AccountRegisterMutationResult = Apollo.MutationResult<AccountRegisterMutation>;
export type AccountRegisterMutationOptions = Apollo.BaseMutationOptions<AccountRegisterMutation, AccountRegisterMutationVariables>;
export const CheckAccountNickAvailabilityDocument = gql`
    mutation checkAccountNickAvailability($name: String!) {
  account {
    general {
      checkNameAvailability(input: {name: $name}) {
        isAvailable
      }
    }
  }
}
    `;
export type CheckAccountNickAvailabilityMutationFn = Apollo.MutationFunction<CheckAccountNickAvailabilityMutation, CheckAccountNickAvailabilityMutationVariables>;

/**
 * __useCheckAccountNickAvailabilityMutation__
 *
 * To run a mutation, you first call `useCheckAccountNickAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckAccountNickAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkAccountNickAvailabilityMutation, { data, loading, error }] = useCheckAccountNickAvailabilityMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCheckAccountNickAvailabilityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CheckAccountNickAvailabilityMutation, CheckAccountNickAvailabilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CheckAccountNickAvailabilityMutation, CheckAccountNickAvailabilityMutationVariables>(CheckAccountNickAvailabilityDocument, options);
      }
export type CheckAccountNickAvailabilityMutationHookResult = ReturnType<typeof useCheckAccountNickAvailabilityMutation>;
export type CheckAccountNickAvailabilityMutationResult = Apollo.MutationResult<CheckAccountNickAvailabilityMutation>;
export type CheckAccountNickAvailabilityMutationOptions = Apollo.BaseMutationOptions<CheckAccountNickAvailabilityMutation, CheckAccountNickAvailabilityMutationVariables>;
export const CheckCexAccountNameDocument = gql`
    mutation checkCexAccountName($name: String!) {
  cexAccount {
    general {
      checkNameAvailability(input: {name: $name}) {
        isAvailable
      }
    }
  }
}
    `;
export type CheckCexAccountNameMutationFn = Apollo.MutationFunction<CheckCexAccountNameMutation, CheckCexAccountNameMutationVariables>;

/**
 * __useCheckCexAccountNameMutation__
 *
 * To run a mutation, you first call `useCheckCexAccountNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckCexAccountNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkCexAccountNameMutation, { data, loading, error }] = useCheckCexAccountNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCheckCexAccountNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CheckCexAccountNameMutation, CheckCexAccountNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CheckCexAccountNameMutation, CheckCexAccountNameMutationVariables>(CheckCexAccountNameDocument, options);
      }
export type CheckCexAccountNameMutationHookResult = ReturnType<typeof useCheckCexAccountNameMutation>;
export type CheckCexAccountNameMutationResult = Apollo.MutationResult<CheckCexAccountNameMutation>;
export type CheckCexAccountNameMutationOptions = Apollo.BaseMutationOptions<CheckCexAccountNameMutation, CheckCexAccountNameMutationVariables>;
export const CreateCexAccountDocument = gql`
    mutation createCexAccount($input: CreateCexAccountInput!) {
  cexAccount {
    manage {
      create(input: $input) {
        meta {
          accountId
          cexAccountId
          name
          cexName
        }
        jwtToken
      }
    }
  }
}
    `;
export type CreateCexAccountMutationFn = Apollo.MutationFunction<CreateCexAccountMutation, CreateCexAccountMutationVariables>;

/**
 * __useCreateCexAccountMutation__
 *
 * To run a mutation, you first call `useCreateCexAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCexAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCexAccountMutation, { data, loading, error }] = useCreateCexAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCexAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCexAccountMutation, CreateCexAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCexAccountMutation, CreateCexAccountMutationVariables>(CreateCexAccountDocument, options);
      }
export type CreateCexAccountMutationHookResult = ReturnType<typeof useCreateCexAccountMutation>;
export type CreateCexAccountMutationResult = Apollo.MutationResult<CreateCexAccountMutation>;
export type CreateCexAccountMutationOptions = Apollo.BaseMutationOptions<CreateCexAccountMutation, CreateCexAccountMutationVariables>;
export const CexAccountsListDocument = gql`
    query cexAccountsList($input: [CexAccountAndJwt!]!) {
  cexAccount {
    list(input: $input) {
      accountId
      cexAccountId
      cexName
      name
      isJwtValid
      apiKey
      image
    }
  }
}
    `;

/**
 * __useCexAccountsListQuery__
 *
 * To run a query within a React component, call `useCexAccountsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCexAccountsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCexAccountsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCexAccountsListQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CexAccountsListQuery, CexAccountsListQueryVariables> & ({ variables: CexAccountsListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CexAccountsListQuery, CexAccountsListQueryVariables>(CexAccountsListDocument, options);
      }
export function useCexAccountsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CexAccountsListQuery, CexAccountsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CexAccountsListQuery, CexAccountsListQueryVariables>(CexAccountsListDocument, options);
        }
export function useCexAccountsListSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<CexAccountsListQuery, CexAccountsListQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<CexAccountsListQuery, CexAccountsListQueryVariables>(CexAccountsListDocument, options);
        }
export type CexAccountsListQueryHookResult = ReturnType<typeof useCexAccountsListQuery>;
export type CexAccountsListLazyQueryHookResult = ReturnType<typeof useCexAccountsListLazyQuery>;
export type CexAccountsListSuspenseQueryHookResult = ReturnType<typeof useCexAccountsListSuspenseQuery>;
export type CexAccountsListQueryResult = Apollo.QueryResult<CexAccountsListQuery, CexAccountsListQueryVariables>;
export const ChangeCexAccountNameDocument = gql`
    mutation changeCexAccountName($input: ChangeCexAccountNameInput!) {
  cexAccount {
    manage {
      changeName(input: $input) {
        cexAccountId
      }
    }
  }
}
    `;
export type ChangeCexAccountNameMutationFn = Apollo.MutationFunction<ChangeCexAccountNameMutation, ChangeCexAccountNameMutationVariables>;

/**
 * __useChangeCexAccountNameMutation__
 *
 * To run a mutation, you first call `useChangeCexAccountNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCexAccountNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCexAccountNameMutation, { data, loading, error }] = useChangeCexAccountNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeCexAccountNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeCexAccountNameMutation, ChangeCexAccountNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeCexAccountNameMutation, ChangeCexAccountNameMutationVariables>(ChangeCexAccountNameDocument, options);
      }
export type ChangeCexAccountNameMutationHookResult = ReturnType<typeof useChangeCexAccountNameMutation>;
export type ChangeCexAccountNameMutationResult = Apollo.MutationResult<ChangeCexAccountNameMutation>;
export type ChangeCexAccountNameMutationOptions = Apollo.BaseMutationOptions<ChangeCexAccountNameMutation, ChangeCexAccountNameMutationVariables>;
export const DeleteCexAccountDocument = gql`
    mutation deleteCexAccount($input: Int!) {
  cexAccount {
    manage {
      delete(cexAccountId: $input) {
        cexAccountId
      }
    }
  }
}
    `;
export type DeleteCexAccountMutationFn = Apollo.MutationFunction<DeleteCexAccountMutation, DeleteCexAccountMutationVariables>;

/**
 * __useDeleteCexAccountMutation__
 *
 * To run a mutation, you first call `useDeleteCexAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCexAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCexAccountMutation, { data, loading, error }] = useDeleteCexAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCexAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCexAccountMutation, DeleteCexAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteCexAccountMutation, DeleteCexAccountMutationVariables>(DeleteCexAccountDocument, options);
      }
export type DeleteCexAccountMutationHookResult = ReturnType<typeof useDeleteCexAccountMutation>;
export type DeleteCexAccountMutationResult = Apollo.MutationResult<DeleteCexAccountMutation>;
export type DeleteCexAccountMutationOptions = Apollo.BaseMutationOptions<DeleteCexAccountMutation, DeleteCexAccountMutationVariables>;
export const LoginCexAccountDocument = gql`
    mutation loginCexAccount($input: CexAccountLoginInput!) {
  cexAccount {
    auth {
      login(input: $input) {
        meta {
          accountId
          cexAccountId
          name
          cexName
        }
        jwtToken
      }
    }
  }
}
    `;
export type LoginCexAccountMutationFn = Apollo.MutationFunction<LoginCexAccountMutation, LoginCexAccountMutationVariables>;

/**
 * __useLoginCexAccountMutation__
 *
 * To run a mutation, you first call `useLoginCexAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginCexAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginCexAccountMutation, { data, loading, error }] = useLoginCexAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginCexAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginCexAccountMutation, LoginCexAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginCexAccountMutation, LoginCexAccountMutationVariables>(LoginCexAccountDocument, options);
      }
export type LoginCexAccountMutationHookResult = ReturnType<typeof useLoginCexAccountMutation>;
export type LoginCexAccountMutationResult = Apollo.MutationResult<LoginCexAccountMutation>;
export type LoginCexAccountMutationOptions = Apollo.BaseMutationOptions<LoginCexAccountMutation, LoginCexAccountMutationVariables>;