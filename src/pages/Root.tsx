import { Container } from '@mui/material';
import { SearchHeader } from '@/components';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function Root() {
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
