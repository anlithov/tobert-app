import React, { FC, PropsWithChildren, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const WithRouter: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    <Suspense fallback={'Loading'}>{children}</Suspense>
  </BrowserRouter>
);

export default WithRouter;
