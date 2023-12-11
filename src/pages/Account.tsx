import type { Account } from '@/types/Account';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loading from './Loading';

export default function Account() {
  // TODO: Differentiate error and user not found
  const { account } = useLoaderData() as { account: Account };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={account} errorElement={<div>Account not found</div>}>
        {(_account: Account) => <div>Found account {_account.testingName}</div>}
      </Await>
    </Suspense>
  );
}
