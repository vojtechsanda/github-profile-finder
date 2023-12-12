import { ExtendedAccount } from '@/types/Account';
import { List, Typography } from '@mui/material';
import { useState } from 'react';
import { OrganizationListItem } from '..';

const INITIAL_ORGANIZATIONS_COUNT = 3;

export default function AccountOrganizations(account: ExtendedAccount) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ORGANIZATIONS_COUNT);
  const organizations = account.organizations;

  const showMoreOrganizations = () => {
    setVisibleCount((currentCount) => {
      const newCount = currentCount + 3;
      return newCount <= organizations.length ? newCount : organizations.length;
    });
  };
  const showLessOrganizations = () => {
    setVisibleCount(INITIAL_ORGANIZATIONS_COUNT);
  };

  return (
    <>
      <Typography variant="h6" component="h2">
        Organizations
      </Typography>
      <List
        sx={{
          marginTop: '0!important',
        }}
      >
        {organizations.slice(0, visibleCount).map((organization) => {
          return <OrganizationListItem {...organization} key={organization.login} />;
        })}
        {organizations.length > INITIAL_ORGANIZATIONS_COUNT && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              textAlign: 'center',
            }}
          >
            {visibleCount < organizations.length ? (
              <span onClick={showMoreOrganizations}>Show more</span>
            ) : (
              <span onClick={showLessOrganizations}>Show less</span>
            )}
          </Typography>
        )}
      </List>
    </>
  );
}
