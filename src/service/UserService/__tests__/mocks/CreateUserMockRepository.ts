import { ICreateUserRepository } from '@repository/types/UserRepository/ICreateUserRepository'

export class CreateUserMockRepository implements ICreateUserRepository {
  createUser (email: string, password: string, name: string, lastName: string): void {
    console.log('creation a user')
  }
}
