import { ICreateUserRepository } from '@repository/types/UserRepository/ICreateUserRepository'
import { ICreateUser } from './types/ICreateUser'

export class CreateUser {
  private createUserRepository: ICreateUserRepository;
  constructor (createUserRepository: ICreateUserRepository) {
    this.createUserRepository = createUserRepository
  }

  async execute (user: {
    email: string;
    password: string;
    name: string;
    lastName: string;
  }): Promise<ICreateUser> {
    const { email, password, name, lastName } = user
    const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    const validName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!validEmail.test(email)) {
      return {
        message: 'Email invalid',
        statusCode: 401
      }
    }

    if (!validPassword.test(password)) {
      return {
        message: 'Password invalid',
        statusCode: 401
      }
    }

    if (!validName.test(name)) {
      return {
        message: 'Name or Last Name invalid',
        statusCode: 401
      }
    }

    if (!validName.test(lastName)) {
      return {
        message: 'Name or Last Name invalid',
        statusCode: 401
      }
    }

    this.createUserRepository.createUser(email, password, name, lastName)
    return { message: 'Create user with success', statusCode: 201 }
  }
}
