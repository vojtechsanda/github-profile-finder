import axios from 'axios';
import { Result } from '@badrap/result';
import type { AccountRepository } from '@/types/Repository';
import { Organization, AccountOrganization } from '@/types/Organization';
import { Account } from '@/types/Account';

export class GitHubApi {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.github.com';
  }

  handleError(err: unknown) {
    if (err instanceof Error) {
      return Result.err(err);
    } else {
      return Result.err(new Error('Unknown error'));
    }
  }

  async getAccountRepositories(username: string) {
    try {
      const response = await axios.get<AccountRepository[]>(
        `${this.baseUrl}/users/${username}/repos`,
      );

      return Result.ok(response.data);
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getAccountOrganizations(username: string) {
    try {
      const response = await axios.get<AccountOrganization[]>(
        `${this.baseUrl}/users/${username}/orgs`,
      );

      return Result.ok(response.data);
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getOrganization(organizationName: string) {
    try {
      const response = await axios.get<Organization>(`${this.baseUrl}/orgs/${organizationName}`);

      return Result.ok(response.data);
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getAccount(username: string) {
    try {
      const response = await axios.get<Account>(`${this.baseUrl}/users/${username}`);

      return Result.ok(response.data);
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getExtendedAccount(username: string) {
    const accountResult = await this.getAccount(username);

    if (accountResult.isErr) return accountResult;

    const account = accountResult.unwrap();

    const [organizationsResult, repositoriesResult] = await Promise.all([
      this.getAccountOrganizations(username),
      this.getAccountRepositories(username),
    ]);

    if (organizationsResult.isErr) return organizationsResult;
    if (repositoriesResult.isErr) return repositoriesResult;

    const organizations = organizationsResult.unwrap();
    const repositories = repositoriesResult.unwrap();

    const extendedAccount = {
      ...account,
      organizations,
      repositories,
    };

    return Result.ok(extendedAccount);
  }
}
