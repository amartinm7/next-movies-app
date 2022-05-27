import { GetPopularPeopleRepository } from './infrastructure/repository/GetPopularPeopleRepository'
import { GetPopularPeopleService } from './application/GetPopularPeopleService'
import { GetPopularPeopleUseCase } from './infrastructure/usecase/GetPopularPeopleUseCase'
/* eslint-disable camelcase, no-console */
class GetPopularPeopleProvider {
  constructor(container) {
    container.service(
      'getPopularPeopleRepository',
      (container) =>
        new GetPopularPeopleRepository(container.configuration.toJSON())
    )
    container.service(
      'getPopularPeopleService',
      (container) =>
        new GetPopularPeopleService({
          getPopularPeopleRepository: container.getPopularPeopleRepository
        })
    )
    container.service(
      'getPopularPeopleUseCase',
      (container) =>
        new GetPopularPeopleUseCase({
          getPopularPeopleService: container.getPopularPeopleService
        })
    )
  }
}

export default GetPopularPeopleProvider
