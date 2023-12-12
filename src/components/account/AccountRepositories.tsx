import { ExtendedAccount } from '@/types/Account';
import { ExpandableList, RepositoryListItem } from '@/components';
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
      resetTrigger={account.login}
      emptyMessage={`${account.name ?? account.login} has no repositories.`}
    />
  );
}
