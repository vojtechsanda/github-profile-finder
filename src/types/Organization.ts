import { Endpoints } from '@octokit/types';

export type AccountOrganization =
  Endpoints['GET /users/{username}/orgs']['response']['data'][number];

export type Organization = Endpoints['GET /orgs/{org}']['response']['data'];
