import { UserPrismaRepository } from '@repository/UserRepository/UserPrismaRepository'
import { VerifyLogin } from '@service/UserService/VerifyLogin'
describe('VerifyLogin', () => {
  it('should return a object of success if the credentials are valid', () => {
    const userRepository = new UserPrismaRepository()
    const verifyLogin = new VerifyLogin(userRepository)
    const result = verifyLogin.execute(1)
    console.log('result', result)
    const expected = {
      id: 1,
      message: 'Login successfully',
      status: true,
      code: 2000
    }

    expect(result).toEqual(expected)
  })
})
