import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';
import { CexAccountAndJwt } from '../../../__graphql/generated.ts';

type JwtStore = {
  jwtAccount: string;
  setJwtAccount: (jwt: string) => void;
};

export const useJwtStore = create<JwtStore>()(
  persist(
    (set, get) => ({
      jwtAccount: '',
      setJwtAccount: (jwt) => set({ jwtAccount: jwt }),
    }),
    {
      name: 'jwt-storage', // name of the item in the storage (must be unique)
    },
  ),
);

type CexJwtsStore = {
  cexJwts: {
    [cexAccountId: number]: {
      jwtCexAccount: string;
    };
  };
  setJwtCexAccount: (cexAccountId: number, jwtCexAccount: string) => void;
  getJwtCexAccount: (cexAccountId: number) => string | null;
  list: () => CexAccountAndJwt[];
};

export const useCexJwtsStore = create<CexJwtsStore>()(
  persist(
    (set, get) => ({
      cexJwts: {},
      setJwtCexAccount: (cexAccountId, jwt) =>
        set((old) => {
          const newStore = { ...old };
          newStore.cexJwts[cexAccountId] = { jwtCexAccount: jwt };

          return newStore;
        }),
      getJwtCexAccount: (cexAccountId) =>
        get().cexJwts?.[cexAccountId]?.jwtCexAccount ?? null,
      list: () =>
        get()?.cexJwts
          ? Object.keys(get().cexJwts).map((cexAccountId) => ({
              cexAccountId: Number(cexAccountId),
              jwtCexAccount: get().cexJwts[Number(cexAccountId)].jwtCexAccount,
            }))
          : [],
    }),
    {
      name: 'cex-jwts-storage',
    },
  ),
);
