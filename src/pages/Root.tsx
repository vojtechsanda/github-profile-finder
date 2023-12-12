import { Container } from '@mui/material';
import { SearchHeader } from '@/components';
import { Outlet } from 'react-router-dom';

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
        <SearchHeader />
        <Outlet />
      </Container>
    </Container>
  );
}
