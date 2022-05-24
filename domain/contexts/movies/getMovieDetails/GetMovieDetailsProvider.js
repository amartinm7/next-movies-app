/* eslint-disable camelcase, no-console */
import { GetMovieDetailsRepository } from "@/domain/contexts/movies/getMovieDetails/infrastructure/repository/GetMovieDetailsRepository";
import { GetMovieDetailsService } from "@/domain/contexts/movies/getMovieDetails/application/GetMovieDetailsService";
import { GetMovieDetailsUseCase } from "@/domain/contexts/movies/getMovieDetails/infrastructure/usecase/GetMovieDetailsUseCase";

class GetMovieDetailsProvider {
  constructor(container) {
    container.service(
      "getMovieDetailsRepository",
      (container) =>
        new GetMovieDetailsRepository(container.configuration.toJSON())
    );
    container.service(
      "getMovieDetailsService",
      (container) =>
        new GetMovieDetailsService({
          getMovieDetailsRepository: container.getMovieDetailsRepository,
        })
    );
    container.service(
      "getMovieDetailsUseCase",
      (container) =>
        new GetMovieDetailsUseCase({
          getMovieDetailsService: container.getMovieDetailsService,
        })
    );
  }
}

export { GetMovieDetailsProvider };
