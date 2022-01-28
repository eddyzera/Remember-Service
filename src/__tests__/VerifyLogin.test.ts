import { UserMockRepositoryValid } from './mocks/UserMockRepository'
import { VerifyLogin } from '@service/UserService/VerifyLogin'
describe('VerifyLogin', () => {
  it('should return a object of success if the credentials are valid', () => {
    const userRepository = new UserMockRepositoryValid()
    const verifyLogin = new VerifyLogin(userRepository)
    const result = verifyLogin.execute('teste_01@gmail.com', 'teste@23041996')
    const expected = {
      id: 1,
      message: 'Login successfully',
      status: true,
      code: 2000
    }

    expect(result).toEqual(expected)
  })

  it('should return a object of failed if the credentials are invalid', () => {
    const userRepository = new UserMockRepositoryValid()
    const verifyLogin = new VerifyLogin(userRepository)
    const result = verifyLogin.execute('teste_01@gmail.com', 'teste@23041996')
    const expected = {
      message: 'Incorrect login and password',
      status: true,
      code: 2000
    }
    expect(result).toEqual(expected)
  })
})
