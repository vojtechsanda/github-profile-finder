import { Box } from '@mui/material';
import { SearchHeader } from '@/components';

export default function Root() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchHeader />
    </Box>
  );
}
