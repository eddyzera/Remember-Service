import { IUseRepository } from '@repository/types/IUserRepository'

export class UserPrismaRepository implements IUseRepository {
  findUserWithLoginPassowrd (email: string, password: string): number {
    return 1
  }
}
