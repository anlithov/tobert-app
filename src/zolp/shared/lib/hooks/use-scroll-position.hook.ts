import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = (e: Event) => {
    const target = e.target as Document;
    setIsScrolled(target?.documentElement?.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isScrolled };
};
