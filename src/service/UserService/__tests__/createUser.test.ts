import { CreateUser } from '../createUser'
import { CreateUserMockRepository } from './mocks/CreateUserMockRepository'

let storeValid
let storeEmailInvalid
let createRepository
let createUserService
describe('CreateUser', () => {
  beforeAll(() => {
    storeValid = {
      email: 'esilvateste622@gmail.com',
      password: '1234@Teste',
      name: 'John Doe'
    }

    storeEmailInvalid = {
      email: 'esilvateste622gmail.com',
      password: '1234@Teste',
      name: 'John Doe'
    }

    createRepository = new CreateUserMockRepository()
    createUserService = new CreateUser(createRepository)
  })
  it('should create a user with the data, email, password, name, lastName', async () => {
    const result = await createUserService.execute(storeValid)
    const expected = {
      message: 'Create user with success',
      statusCode: 201
    }

    expect(result).toEqual(expected)
  })

  it('should validate email and if the email of user to be invalid return a object of failed email', async () => {
    const result = await createUserService.execute(storeEmailInvalid)

    const expected = {
      message: 'Email invalid',
      statusCode: 401
    }

    expect(result).toEqual(expected)
  })
})
