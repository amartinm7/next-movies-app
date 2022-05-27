import { GetPeopleDetailsRepository } from './infrastructure/repository/GetPeopleDetailsRepository'
import { GetPeopleDetailsService } from './application/GetPeopleDetailsService'
import { GetPeopleDetailsUseCase } from './infrastructure/usecase/GetPeopleDetailsUseCase'
/* eslint-disable camelcase, no-console */
class GetPeopleDetailsProvider {
  constructor(container) {
    container.service(
      'getPeopleDetailsRepository',
      (container) =>
        new GetPeopleDetailsRepository(container.configuration.toJSON())
    )
    container.service(
      'getPeopleDetailsService',
      (container) =>
        new GetPeopleDetailsService({
          getPeopleDetailsRepository: container.getPeopleDetailsRepository
        })
    )
    container.service(
      'getPeopleDetailsUseCase',
      (container) =>
        new GetPeopleDetailsUseCase({
          getPeopleDetailsService: container.getPeopleDetailsService
        })
    )
  }
}

export default GetPeopleDetailsProvider
