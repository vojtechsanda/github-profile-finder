import { Organization } from './Organization';
import { Repository } from './Repository';
import { Endpoints } from '@octokit/types';

export type CoreAccount = Endpoints['GET /users/{username}']['response']['data'];

export type Account = CoreAccount & {
  organizations: Organization[];
  repositories: Repository[];
};
