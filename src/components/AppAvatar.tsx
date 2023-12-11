import { GitHub } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AppAvatar() {
  return (
    <Avatar
      sx={{
        height: '5rem',
        width: '5rem',
        marginBottom: '-2rem',
        bgcolor: 'background.default',
      }}
    >
      <Link to="/">
        <GitHub
          color="primary"
          sx={{
            height: '100%',
            width: '100%',
          }}
        />
      </Link>
    </Avatar>
  );
}
