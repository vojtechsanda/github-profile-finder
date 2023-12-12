import type { Account, ExtendedAccount } from '@/types/Account';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loading from './Loading';
import { AccountDetail } from '@/components/account';

export default function Account() {
  // TODO: Differentiate error and account not found
  const { account: accountPromise } = useLoaderData() as { account: Account };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={accountPromise} errorElement={<div>Account not found</div>}>
        {(account: ExtendedAccount) => <AccountDetail {...account} />}
      </Await>
    </Suspense>
  );
}
