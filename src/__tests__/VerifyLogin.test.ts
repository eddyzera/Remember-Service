describe('VerifyLogin', () => {
  it('should return a object of success if the credentials are valid', () => {
    const userRepository = new UserRepository()
    const verifyLogin = new VerifyLogin(userRepository)
    const expected = {
      message: 'Login successfully',
      status: true,
      code: 2000
    }

    expect(verifyLogin).toBe(expected)
  })
})
