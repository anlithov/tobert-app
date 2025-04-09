import React from 'react';
import GlobalStyled from '../zolp/app/styles/global.styled';
import WithRouter from './providers/WithRouterProvider';
import ModalProvider from '../zolp/app/providers/ModalProvider';
import { Routing } from '../pages/Routing';
import AppThemeProvider from '../zolp/app/providers/AppThemeProvider.tsx';
import ApolloClientProvider from './providers/ApolloProvider.tsx';
import TranslationProvider from '../zolp/app/providers/TranslationProvider.tsx';
import YupRewriteMessagesProvider from './providers/YupRewriteMessagesProvider.tsx';

const App = () => {
  return (
    <TranslationProvider>
      <YupRewriteMessagesProvider />
      <ApolloClientProvider>
        <AppThemeProvider>
          <div className="app">
            <GlobalStyled />
            <WithRouter>
              <ModalProvider />
              <Routing />
            </WithRouter>
          </div>
        </AppThemeProvider>
      </ApolloClientProvider>
    </TranslationProvider>
  );
};

export default App;
