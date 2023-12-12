import { ExtendedAccount } from '@/types/Account';
import { Box } from '@mui/material';
import { AccountHeader, AccountOrganizations, AccountRepositories } from '.';
import { motion } from 'framer-motion';
import { getGeneralFadeIn } from '@/utils/animationUtils';
import { useEffect, useRef } from 'react';

export default function AccountDetail(account: ExtendedAccount) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [account.id]);

  return (
    <motion.div key={`account-detail-${account.id}`} {...getGeneralFadeIn()}>
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
          paddingTop: '2rem',
        }}
        ref={ref}
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
    </motion.div>
  );
}
