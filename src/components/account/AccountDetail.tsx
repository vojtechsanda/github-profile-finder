import { ExtendedAccount } from '@/types/Account';
import { Stack } from '@mui/material';
import { AccountHeader, AccountOrganizations, AccountRepositories } from '.';

export default function AccountDetail(account: ExtendedAccount) {
  return (
    <Stack spacing={2}>
      <AccountHeader {...account} />
      <AccountOrganizations {...account} />
      <AccountRepositories {...account} />
    </Stack>
  );
}
