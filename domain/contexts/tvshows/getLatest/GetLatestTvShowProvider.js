import { GetLatestTvShowRepository } from "./infrastructure/repository/GetLatestTvShowRepository.js";
import { GetLatestTvShowUseCase } from "./infrastructure/usecase/GetLatestTvShowUseCase.js";
import { GetLatestTvShowService } from "./application/service/GetLatestTvShowService.js";

/* eslint-disable camelcase, no-console */
class GetLatestTvShowProvider {
  constructor(container) {
    container.service(
      "getLatestTvShowRepository",
      (container) =>
        new GetLatestTvShowRepository(container.configuration.toJSON())
    );
    container.service(
      "getLatestTvShowService",
      (container) =>
        new GetLatestTvShowService({
          getLatestTvShowRepository: container.getLatestTvShowRepository,
        })
    );
    container.service(
      "getLatestTvShowUseCase",
      (container) =>
        new GetLatestTvShowUseCase({
          getLatestTvShowService: container.getLatestTvShowService,
        })
    );
  }
}

export { GetLatestTvShowProvider };
