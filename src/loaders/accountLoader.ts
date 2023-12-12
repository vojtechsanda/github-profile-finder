import { defer } from 'react-router-dom';
import { GitHubApi } from './githubApi';

const api = new GitHubApi();

export const accountLoader = (props: unknown) => {
  const params = (props as { params: { accountId: string } }).params;

  return defer({
    account: (async () => {
      const accountResult = await api.getExtendedAccount(params.accountId);
      return accountResult.unwrap();
    })(),
  });
};
