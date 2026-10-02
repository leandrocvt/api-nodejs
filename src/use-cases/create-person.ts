import type { Person } from '@/entities/person.entity'
import type { PersonRepository } from '@/repositories/person.repository'

export class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  handler(person: Person) {
    return this.personRepository.create(person)
  }
}
