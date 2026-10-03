import type { User } from '@/entities/user.entity'
import type { Person } from '@/entities/person.entity'
import type { UserRepository } from '@/repositories/user.repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindWithPersonUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(userId: number): Promise<(User & Person) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)
    if (!user) throw new ResourceNotFoundError()
    return user
  }
}
