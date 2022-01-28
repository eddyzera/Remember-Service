export interface IUseRepository {
  findUserWithLoginPassowrd(email: string, password: string): number
}
