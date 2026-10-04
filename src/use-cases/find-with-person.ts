import type { User } from '@/entities/user.entity'
import type { Person } from '@/entities/person.entity'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import type { IUserRepository } from '@/repositories/user.repository.interface'

export class FindWithPersonUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(userId: number): Promise<(User & Person) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)
    if (!user) throw new ResourceNotFoundError()
    return user
  }
}
