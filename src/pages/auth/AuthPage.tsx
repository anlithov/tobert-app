import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTH_SCREENS } from '../../shared/lib/constants/routes-names.const.ts';
import ReplacerDelayed from '../../zolp/shared/ui/molecules/ReplacerDelayed/ReplacerDelayed.tsx';
import AccountAuthCard from '../../entities/account/ui/AccountAuthCard/AccountAuthCard.tsx';
import TabsV2 from '../../zolp/shared/ui/atoms/Tabs/v2/TabsV2.tsx';
import AccountLoginForm from '../../features/auth/login/ui/AccountLoginForm/AccountLoginForm.tsx';
import { FormContainer2 } from '../../features/auth/login/ui/AccountLoginForm/AccountLoginForm.styled.ts';
import AccountRegisterForm from '../../features/auth/register/ui/AccountRegisterForm/AccountRegisterForm.tsx';
import { useAccountLoginFormTabs } from '../../features/auth/login/ui/AccountLoginForm/libs/hooks/use-account-login-form-tabs.hook.tsx';
import { useSetBrowserTabName } from '../../zolp/shared/lib/hooks/use-set-browser-tab-name.ts';

const AuthPage = () => {
  const { authMode } = useParams();

  const [selectedTab, setSelectedTab] = useState(authMode ?? 'login');
  useEffect(() => {
    setSelectedTab(authMode ?? AUTH_SCREENS.login);
  }, [authMode]);

  const isLoginTab = selectedTab === AUTH_SCREENS.login;

  const PAGE_TITLE = isLoginTab ? 'Login' : 'Register';
  useSetBrowserTabName(PAGE_TITLE);

  const tabItems = useAccountLoginFormTabs(authMode || '');

  return (
    <AccountAuthCard>
      <TabsV2
        items={tabItems}
        containerHeight="5em"
        containerWidth="100%"
        buttonWidth="100%"
      />
      <ReplacerDelayed
        keySelected={selectedTab}
        components={{
          login: <AccountLoginForm />,
          register: <AccountRegisterForm />,
        }}
        ContainerComponent={FormContainer2}
      />
    </AccountAuthCard>
  );
};

export default AuthPage;
