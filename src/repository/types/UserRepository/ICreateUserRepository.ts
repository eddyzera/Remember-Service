export interface ICreateUserRepository {
  createUser(email: string, password: string, name: string, lastName: string): void
}
