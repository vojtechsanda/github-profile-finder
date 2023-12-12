import { ExtendedAccount } from '@/types/Account';
import { ExpandableList, RepositoryListItem } from '..';

export default function AccountRepositories(account: ExtendedAccount) {
  return (
    <ExpandableList
      list={account.repositories.map((repository) => {
        return <RepositoryListItem {...repository} key={repository.id} />;
      })}
      title="Repositories"
    />
  );
}
