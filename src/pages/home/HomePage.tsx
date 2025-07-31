import React from 'react';
import { useSetBrowserTabName } from '../../zolp/shared/lib/hooks/use-set-browser-tab-name.ts';
import HomeContent from './content/HomeContent.tsx';

const HomePage = () => {
  useSetBrowserTabName('Home');

  return <HomeContent />;
};

export default HomePage;
