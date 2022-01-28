import { ICreateUserRepository } from '@repository/types/UserRepository/ICreateUserRepository'
import { ICreateUser } from './types/ICreateUser'

export class CreateUser {
  private createUserRepository: ICreateUserRepository
  constructor (createUserRepository: ICreateUserRepository) {
    this.createUserRepository = createUserRepository
  }

  async execute (user: {email: string, password: string, name: string, lastName: string}): Promise<ICreateUser> {
    const { email, password, name, lastName } = user
    this.createUserRepository.createUser(email, password, name, lastName)

    return { message: 'Create user with success', statusCode: 201 }
  }
}
