import React from 'react';
import CreateBotContent from './content/CreateBotContent.tsx';
import { useSetBrowserTabName } from '../../zolp/shared/lib/hooks/use-set-browser-tab-name.ts';

const CreateBotPage = () => {
  useSetBrowserTabName('Create Bot');

  return <CreateBotContent />;
};

export default CreateBotPage;
