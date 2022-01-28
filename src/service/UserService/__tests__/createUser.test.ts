import { CreateUser } from '../createUser'
import { CreateUserMockRepository } from './mocks/CreateUserMockRepository'

let storeValid

describe('CreateUser', () => {
  beforeAll(() => {
    storeValid = {
      email: 'esilvateste622@gmail.com',
      password: '1234@Teste',
      name: 'John Doe'
    }
  })
  it('should create a user with the data, email, password, name, lastName', async () => {
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
})
