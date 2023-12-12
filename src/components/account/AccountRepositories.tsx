import { ExtendedAccount } from '@/types/Account';
import { ExpandableList, RepositoryListItem } from '..';
import { useMemo } from 'react';

export default function AccountRepositories(account: ExtendedAccount) {
  const sortedRepositories = useMemo(
    () =>
      [...account.repositories].sort(
        (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0),
      ),
    [account.repositories],
  );

  return (
    <ExpandableList
      list={sortedRepositories.map((repository) => {
        return <RepositoryListItem {...repository} key={repository.id} />;
      })}
      title="Repositories"
    />
  );
}
