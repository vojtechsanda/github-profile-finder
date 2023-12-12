import { ExtendedAccount } from '@/types/Account';
import { ExpandableList, OrganizationListItem } from '@/components';

export default function AccountOrganizations(account: ExtendedAccount) {
  return (
    <ExpandableList
      list={account.organizations.map((organization) => (
        <OrganizationListItem key={organization.id} {...organization} />
      ))}
      title="Organizations"
      resetTrigger={account.login}
      emptyMessage={`${account.name ?? account.login} is not a member of any organizations.`}
    />
  );
}
