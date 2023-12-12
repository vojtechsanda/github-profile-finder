import { Typography } from '@mui/material';

export interface ErrorProps {
  message?: string;
}

export default function Error({
  message = 'Unexpected error, please try again later',
}: ErrorProps) {
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
