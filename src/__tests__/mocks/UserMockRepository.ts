import { IUseRepository } from '@repository/types/IUserRepository'

export class UserMockRepositoryValid implements IUseRepository {
  findUserWithLoginPassowrd (email: string, password: string): number {
    return 1
  }
}
