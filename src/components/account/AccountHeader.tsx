import { ExtendedAccount } from '@/types/Account';
import { formatDate } from '@/utils/dateUtils';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import { PlainLink } from '..';
import { formatNumber } from '../../utils/numberUtils';

export default function AccountHeader(account: ExtendedAccount) {
  const formattedDate = formatDate(new Date(account.created_at));

  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingBottom: '1rem',
      }}
    >
      <Badge
        badgeContent={account.type}
        color="primary"
        overlap="circular"
        sx={{
          '.MuiBadge-badge': {
            fontSize: '1rem',
            padding: '0.8725rem 1rem',
            borderRadius: '10rem',
          },
        }}
      >
        <Avatar
          sx={{
            width: '10rem',
            height: '10rem',
            marginBottom: '1rem',
          }}
          src={account.avatar_url}
        />
      </Badge>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: '0.5rem',
        }}
      >
        <PlainLink to={account.html_url} target="_blank" rel="noopener noreferrer">
          {account.name ?? account.login}
        </PlainLink>
      </Typography>
      <Typography variant="body1" component="p">
        <b>{formatNumber(account.followers)}</b> Followers |{' '}
        <b>{formatNumber(account.following)}</b> Following
      </Typography>
      <Typography variant="caption" color="text.secondary" component="p">
        Member since {formattedDate}
      </Typography>
    </Box>
  );
}
