import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTH_SCREENS } from '../../shared/lib/constants/routes-names.const.ts';
import GuestLayout from '../../app/layouts/GuestLayout/GuestLayout.tsx';
import ReplacerDelayed from '../../zolp/features/ReplacerDelayed/ReplacerDelayed.tsx';
import AccountAuthCard from '../../entities/Account/ui/AccountAuthCard/AccountAuthCard.tsx';
import TabsV2 from '../../zolp/shared/ui/Tabs/v2/TabsV2.tsx';
import AccountLoginForm from '../../entities/Account/components/AccountLoginForm/AccountLoginForm.tsx';
import { FormContainer2 } from '../../entities/Account/components/AccountLoginForm/AccountLoginForm.styled.ts';
import AccountRegisterForm from '../../entities/Account/components/AccountRegisterForm/AccountRegisterForm.tsx';
import { useAccountLoginFormTabs } from '../../entities/Account/components/AccountLoginForm/libs/hooks/use-account-login-form-tabs.hook.tsx';
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
    <GuestLayout>
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
    </GuestLayout>
  );
};

export default AuthPage;
