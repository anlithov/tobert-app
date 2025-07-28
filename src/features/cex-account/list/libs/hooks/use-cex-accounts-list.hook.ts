import { useCexAccountsListQuery } from '../../../../../__graphql/generated.ts';
import {
  useCexJwtsStore,
  useJwtStore,
} from '../../../../../app/lib/hooks/use-jwt-tokens.hook.ts';

export const useCexAccountsList = () => {
  const { jwtAccount } = useJwtStore();
  const { list, cexJwts } = useCexJwtsStore();

  console.log('list', list());

  const { data, loading } = useCexAccountsListQuery({
    variables: {
      input: list(),
    },
    defaultOptions: {
      context: {
        headers: {
          jwt_account: jwtAccount,
        },
      },
    },
  });

  return {
    list: data?.cexAccount?.list ?? [],
    loading,
  };
};
