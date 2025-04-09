import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';

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
