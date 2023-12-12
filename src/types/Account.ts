import type { Organization } from './Organization';
import type { AccountRepository } from './Repository';
import type { Endpoints } from '@octokit/types';

export type Account = Endpoints['GET /users/{username}']['response']['data'];

export type ExtendedAccount = Account & {
  organizations: Organization[];
  repositories: AccountRepository[];
};
