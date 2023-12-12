import { ExtendedAccount } from '@/types/Account';
import { ExpandableList, OrganizationListItem } from '..';

export default function AccountOrganizations(account: ExtendedAccount) {
  return (
    <ExpandableList
      list={account.organizations.map((organization) => (
        <OrganizationListItem key={organization.id} {...organization} />
      ))}
      title="Organizations"
    />
  );
}
