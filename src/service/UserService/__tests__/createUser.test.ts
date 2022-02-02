import { CreateUser } from '../createUser'
import { CreateUserMockRepository } from './mocks/CreateUserMockRepository'

describe('CreateUser', () => {
  it('should create a user with the data, email, password, name, lastName', async () => {
    const storeValid = {
      email: 'esilvateste622@gmail.com',
      password: '1234@Teste',
      name: 'John',
      lastName: 'Doe'
    }
    const createRepository = new CreateUserMockRepository()
    const createUserService = new CreateUser(createRepository)
    const result = await createUserService.execute(storeValid)
    const expected = {
      message: 'Create user with success',
      statusCode: 201
    }

    expect(result).toEqual(expected)
  })

  it('should validate email and if the email of user to be invalid return a object of failed email', async () => {
    const storeEmailInvalid = {
      email: 'esilvateste622gmail.com',
      password: '1234@Teste',
      name: 'John',
      lastName: 'Doe'
    }
    const createRepository = new CreateUserMockRepository()
    const createUserService = new CreateUser(createRepository)
    const result = await createUserService.execute(storeEmailInvalid)

    const expected = {
      message: 'Email invalid',
      statusCode: 401
    }

    expect(result).toEqual(expected)
  })

  it('should validate the password of user and if its invalid return a object with values message: Password Invalid, statusCode: 401', async () => {
    const storePasswordInvalid = {
      email: 'esilvateste622@gmail.com',
      password: '1234Teste',
      name: 'John',
      lastName: 'Doe'
    }
    const createRepository = new CreateUserMockRepository()
    const createUserService = new CreateUser(createRepository)
    const result = await createUserService.execute(storePasswordInvalid)
    const expected = {
      message: 'Password invalid',
      statusCode: 401
    }

    expect(result).toEqual(expected)
  })

  it('should validate the name and last name of user, if its invalid return a object with values message: Name or Last Name invalid, statusCode: 401', async () => {
    const storeNameAndLastNameInvalid = {
      email: 'esilvateste622@gmail.com',
      password: '1234@Teste',
      name: 'John 4',
      lastName: 'Doe'
    }
    const createRepository = new CreateUserMockRepository()
    const createUserService = new CreateUser(createRepository)
    const result = await createUserService.execute(storeNameAndLastNameInvalid)

    const expected = {
      message: 'Name or Last Name invalid',
      statusCode: 401
    }

    expect(result).toEqual(expected)
  })
})
