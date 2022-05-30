import { SearchMultiEntitiesRepository } from './infrastructure/repository/SearchMultiEntitiesRepository'
import { SearchMultiEntitiesService } from './application/SearchMultiEntitiesService'
import { SearchMultiEntitiesUseCase } from './infrastructure/usecase/SearchMultiEntitiesUseCase'
/* eslint-disable camelcase, no-console */
class SearchMultiEntitiesProvider {
  constructor(container) {
    container.service(
      'searchMultiEntitiesRepository',
      (container) =>
        new SearchMultiEntitiesRepository(container.configuration.toJSON())
    )
    container.service(
      'searchMultiEntitiesService',
      (container) =>
        new SearchMultiEntitiesService({
          searchMultiEntitiesRepository: container.searchMultiEntitiesRepository
        })
    )
    container.service(
      'searchMultiEntitiesUseCase',
      (container) =>
        new SearchMultiEntitiesUseCase({
          searchMultiEntitiesService: container.searchMultiEntitiesService
        })
    )
  }
}

export default SearchMultiEntitiesProvider
