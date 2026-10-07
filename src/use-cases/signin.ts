import type { IUserRepository } from '@/repositories/user.repository.interface'
import { InvalidCredentialsError } from './errors/invalid-credential-error'

export class SigninUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(username: string) {
    const user = await this.userRepository.findByUsername(username)
    if (!user) {
      throw new InvalidCredentialsError()
    }

    return user
  }
}
