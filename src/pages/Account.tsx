import type { Account, ExtendedAccount } from '@/types/Account';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loading from './Loading';
import { AccountDetail } from '@/components/account';
import { AccountError } from '.';

export default function Account() {
  const { account: accountPromise } = useLoaderData() as { account: Account };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={accountPromise} errorElement={<AccountError />}>
        {(account: ExtendedAccount) => <AccountDetail {...account} />}
      </Await>
    </Suspense>
  );
}
