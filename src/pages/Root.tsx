import { Container } from '@mui/material';
import { SearchHeader } from '@/components';
import { Outlet, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Root() {
  const { accountId } = useParams();

  useEffect(() => {
    document.title = accountId ? `${accountId} | GitHub Profile Finder` : 'GitHub Profile Finder';
  }, [accountId]);

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: '2rem',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <AnimatePresence>
          <SearchHeader />
          <Outlet />
        </AnimatePresence>
      </Container>
    </Container>
  );
}
