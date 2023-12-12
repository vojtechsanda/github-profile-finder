import { Box, Chip, ChipTypeMap, ListItem, ListItemText, Tooltip } from '@mui/material';
import { getLineLimitationSx } from '@/utils/sxUtils';
import { PlainLink } from '.';
import { AccountRepository } from '@/types/Repository';
import { StarBorderOutlined, BugReportOutlined, TerminalOutlined } from '@mui/icons-material';
import { formatNumber } from '@/utils/numberUtils';
import { motion } from 'framer-motion';
import { getGeneralFadeIn } from '@/utils/animationUtils';

function RepositoryChip({
  label,
  count,
  ...props
}: ChipTypeMap['props'] & { label: string; count?: number }) {
  let newLabel = label;

  if (typeof count === 'number') {
    newLabel = `${formatNumber(count)} ${label}${count !== 1 ? 's' : ''}`;
  }

  return <Chip {...props} label={newLabel} variant="outlined" />;
}

export default function OrganizationListItem(repository: AccountRepository) {
  return (
    <motion.div key={`repository-item-${repository.id}`} {...getGeneralFadeIn()}>
      <ListItem
        key={repository.id}
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          border: '1px solid',
          borderColor: 'divider',
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
          sx={{
            marginTop: 0,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <RepositoryChip
            label="star"
            count={repository.stargazers_count ?? 0}
            icon={<StarBorderOutlined fontSize="small" />}
          />
          <RepositoryChip
            label="star"
            count={repository.stargazers_count ?? 0}
            icon={<StarBorderOutlined fontSize="small" />}
          />
          <RepositoryChip
            label="issue"
            count={repository.open_issues_count ?? 0}
            icon={<BugReportOutlined fontSize="small" />}
          />
          {repository.language && (
            <RepositoryChip
              label={repository.language}
              icon={<TerminalOutlined fontSize="small" />}
            />
          )}
        </Box>
      </ListItem>
    </motion.div>
  );
}
