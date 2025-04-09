import { useEffect } from 'react';

export const useSetBrowserTabName = (name: string) => {
  useEffect(() => {
    if (name) {
      document.title = `${name} - Tobert`;
    } else {
      document.title = 'Tobert';
    }
  }, []);
};
