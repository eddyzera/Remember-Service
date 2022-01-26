import { IUseRepository } from '@repository/types/IUserRepository'
import { IVerifyLogin } from '@service/types/IVerifyLogin'

export class VerifyLogin {
  private userRepository: IUseRepository;

  constructor (userRepository: IUseRepository) {
    this.userRepository = userRepository
  }

  execute (idUser): IVerifyLogin {
    const result = {
      id: this.userRepository.findUserById(idUser),
      message: 'Login successfully',
      status: true,
      code: 2000
    }
    return result
  }
}
