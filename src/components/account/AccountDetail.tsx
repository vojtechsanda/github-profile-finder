import { ExtendedAccount } from '@/types/Account';
import { Box } from '@mui/material';
import { AccountHeader, AccountOrganizations, AccountRepositories } from '.';

export default function AccountDetail(account: ExtendedAccount) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
        },
        maxWidth: {
          xs: '25rem',
          sm: '100%',
        },
        marginX: 'auto',
      }}
    >
      <Box
        sx={{
          gridColumn: '1 / -1',
        }}
      >
        <AccountHeader {...account} />
      </Box>
      <Box>
        <AccountOrganizations {...account} />
      </Box>
      <Box>
        <AccountRepositories {...account} />
      </Box>
    </Box>
  );
}
