import { Endpoints } from '@octokit/types';

export type AccountRepository =
  Endpoints['GET /users/{username}/repos']['response']['data'][number];
