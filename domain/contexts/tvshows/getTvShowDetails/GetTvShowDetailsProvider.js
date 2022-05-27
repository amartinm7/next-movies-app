import { GetTvShowDetailsRepository } from "./infrastructure/repository/GetTvShowDetailsRepository";
import { GetTvShowDetailsService } from "./application/GetTvShowDetailsService";
import { GetTvShowDetailsUseCase } from "./infrastructure/usecase/GetTvShowDetailsUseCase";
/* eslint-disable camelcase, no-console */
class GetTvShowDetailsProvider {
  constructor(container) {
    container.service(
      "getTvShowDetailsRepository",
      (container) =>
        new GetTvShowDetailsRepository(container.configuration.toJSON())
    );
    container.service(
      "getTvShowDetailsService",
      (container) =>
        new GetTvShowDetailsService({
          getTvShowDetailsRepository: container.getTvShowDetailsRepository,
        })
    );
    container.service(
      "getTvShowDetailsUseCase",
      (container) =>
        new GetTvShowDetailsUseCase({
          getTvShowDetailsService: container.getTvShowDetailsService,
        })
    );
  }
}

export default GetTvShowDetailsProvider;
