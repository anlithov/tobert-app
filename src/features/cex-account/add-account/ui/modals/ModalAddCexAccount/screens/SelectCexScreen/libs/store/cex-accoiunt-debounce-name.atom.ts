import { atom } from 'jotai';

export const atomCexAccountNameToBeDebounced = atom<string>('');
export const atomCexAccountNameDebounced = atom<string>('');
export const atomCexAccountNameIsDebouncing = atom<boolean>(false);

export const atomCexAccountNameAvailableButton = atom<boolean>(true);

export const atomCexAccountFieldsAreLocked = atom<boolean>(false);
