import { IUseRepository } from '@repository/types/IUserRepository'

export class UserPrismaRepository implements IUseRepository {
  findUserById (userId: number): number {
    return 1
  }
}
