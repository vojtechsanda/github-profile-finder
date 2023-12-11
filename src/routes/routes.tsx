import type { RouteObject } from 'react-router-dom';
import Root from '@/pages/Root.tsx';
import Account from '@/pages/Account.tsx';
import AccountError from '@/pages/AccountError.tsx';
import Error from '@/pages/Error.tsx';
import { accountLoader } from '@/loaders/accountLoader';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'account/:accountId',
        element: <Account />,
        loader: accountLoader,
        errorElement: <AccountError />,
      },
    ],
  },
];
