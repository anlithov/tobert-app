import { atom } from 'recoil';

export const atomSideMenuVisibility = atom<boolean>({
  default: true,
  key: 'atomSideMenuVisibility',
});
