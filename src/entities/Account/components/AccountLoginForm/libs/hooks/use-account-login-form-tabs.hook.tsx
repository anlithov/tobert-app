import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill, RiLoginCircleLine } from 'react-icons/ri';
import { FaAddressCard, FaRegAddressCard } from 'react-icons/fa6';
import { Tab } from '../../../../../../zolp/shared/ui/atoms/Tabs/v2/TabsV2.tsx';
import {
  AUTH_SCREENS,
  ROUTES_NAMES_GENERATOR,
} from '../../../../../../shared/lib/constants/routes-names.const.ts';
import Divider from '../../../../../../zolp/shared/ui/atoms/Divider/Divider.tsx';

export const useAccountLoginFormTabs = (activeTab: string): Tab[] => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        content: (
          <>
            {activeTab === AUTH_SCREENS.login ? (
              <RiLoginCircleFill size="2em" />
            ) : (
              <RiLoginCircleLine size="2em" />
            )}
            <Divider width="0.7em" />
            <span>Login</span>
          </>
        ),
        active: activeTab === AUTH_SCREENS.login,
        onClick: () =>
          navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.login)),
      },
      {
        content: (
          <>
            {activeTab === AUTH_SCREENS.register ? (
              <FaAddressCard size="2em" />
            ) : (
              <FaRegAddressCard size="2em" />
            )}
            <Divider width="0.7em" />
            <span>Register</span>
          </>
        ),
        active: activeTab === AUTH_SCREENS.register,
        onClick: () =>
          navigate(ROUTES_NAMES_GENERATOR.AUTH(AUTH_SCREENS.register)),
      },
    ],
    [activeTab],
  );
};
