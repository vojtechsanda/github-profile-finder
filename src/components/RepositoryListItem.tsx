import { Chip, ChipTypeMap, ListItem, ListItemText, Stack, Tooltip } from '@mui/material';
import { getLineLimitationSx } from '@/utils/sxUtils';
import { PlainLink } from '.';
import { AccountRepository } from '@/types/Repository';
import { StarBorderOutlined, AltRouteOutlined } from '@mui/icons-material';
import { formatNumber } from '@/utils/numberUtils';

function RepositoryChip({
  label,
  count,
  ...props
}: ChipTypeMap['props'] & { label: string; count: number }) {
  const multiReadyLabel = `${formatNumber(count)} ${label}${count !== 1 ? 's' : ''}`;

  return <Chip {...props} label={multiReadyLabel} variant="outlined" />;
}

export default function OrganizationListItem(repository: AccountRepository) {
  return (
    <>
      <ListItem
        key={repository.id}
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <ListItemText
          primary={
            <PlainLink to={repository.html_url} target="_blank" rel="noopener noreferrer">
              {repository.name ?? repository.id}
            </PlainLink>
          }
          secondary={
            repository.description && (
              <Tooltip title={repository.description} placement="top">
                <span>{repository.description}</span>
              </Tooltip>
            )
          }
          primaryTypographyProps={{
            sx: getLineLimitationSx(1),
          }}
          secondaryTypographyProps={{
            sx: getLineLimitationSx(1),
          }}
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            marginTop: '0.25rem',
          }}
        >
          <RepositoryChip
            label="star"
            count={repository.stargazers_count ?? 0}
            icon={<StarBorderOutlined fontSize="small" />}
          />
          <RepositoryChip
            label="fork"
            count={repository.stargazers_count ?? 0}
            icon={<AltRouteOutlined fontSize="small" />}
          />
        </Stack>
      </ListItem>
    </>
  );
}
