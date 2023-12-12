import { Typography } from '@mui/material';

export default function Error({
  message = 'Unexpected error, please try again later',
}: {
  message?: string;
}) {
  return (
    <Typography
      color="error"
      sx={{
        textAlign: 'center',
      }}
    >
      {message}
    </Typography>
  );
}
