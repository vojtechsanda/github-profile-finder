import { Endpoints } from '@octokit/types';

export type CoreOrganization = Endpoints['GET /users/{username}/orgs']['response']['data'][number];

export type Organization = CoreOrganization & {
  name: string | null;
  html_url: string;
};
