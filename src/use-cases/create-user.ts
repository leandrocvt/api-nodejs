import { User } from '@/entities/user.entity'
import type { UserRepository } from '@/repositories/user.repository'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(user: User): Promise<User | undefined> {
    return this.userRepository.create(user)
  }
}
