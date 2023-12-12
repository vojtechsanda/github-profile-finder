import { ExtendedAccount } from '@/types/Account';
import { List, Typography } from '@mui/material';
import { useState } from 'react';
import { RepositoryListItem } from '..';

const INITIAL_REPOSITORIES_COUNT = 3;

export default function AccountRepositories(account: ExtendedAccount) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_REPOSITORIES_COUNT);
  const repositories = account.repositories;

  const showMoreRepositories = () => {
    setVisibleCount((currentCount) => {
      const newCount = currentCount + 3;
      return newCount <= repositories.length ? newCount : repositories.length;
    });
  };
  const showLessRepositories = () => {
    setVisibleCount(INITIAL_REPOSITORIES_COUNT);
  };

  return (
    <>
      <Typography variant="h6" component="h2">
        Repositories
      </Typography>
      <List
        sx={{
          marginTop: '0!important',
        }}
      >
        {repositories.slice(0, visibleCount).map((repository) => {
          return <RepositoryListItem {...repository} key={repository.id} />;
        })}
        {repositories.length > INITIAL_REPOSITORIES_COUNT && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              textAlign: 'center',
            }}
          >
            {visibleCount < repositories.length ? (
              <span onClick={showMoreRepositories}>Show more</span>
            ) : (
              <span onClick={showLessRepositories}>Show less</span>
            )}
          </Typography>
        )}
      </List>
    </>
  );
}
