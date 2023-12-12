import type { Account, ExtendedAccount } from '@/types/Account';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loading from './Loading';

export default function Account() {
  // TODO: Differentiate error and account not found
  const { account } = useLoaderData() as { account: Account };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={account} errorElement={<div>Account not found</div>}>
        {(_account: ExtendedAccount) => <div>Found account {_account.name}</div>}
      </Await>
    </Suspense>
  );
}
