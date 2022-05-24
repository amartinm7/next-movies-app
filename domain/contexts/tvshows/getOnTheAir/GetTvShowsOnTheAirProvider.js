/* eslint-disable camelcase, no-console */
import { GetTvShowsOnTheAirRepository } from "@/domain/contexts/tvshows/getOnTheAir/infrastructure/respository/GetTvShowsOnTheAirRepository";
import { GetTvShowsOnTheAirService } from "@/domain/contexts/tvshows/getOnTheAir/application/GetTvShowsOnTheAirService";
import { GetTvShowsOnTheAirUseCase } from "@/domain/contexts/tvshows/getOnTheAir/infrastructure/usecase/GetTvShowsOnTheAirUseCase";

class GetTvShowsOnTheAirProvider {
  constructor(container) {
    container.service(
      "getTvShowsOnTheAirRepository",
      (container) =>
        new GetTvShowsOnTheAirRepository(container.configuration.toJSON())
    );
    container.service(
      "getTvShowsOnTheAirService",
      (container) =>
        new GetTvShowsOnTheAirService({
          getTvShowsOnTheAirRepository: container.getTvShowsOnTheAirRepository,
        })
    );
    container.service(
      "getTvShowsOnTheAirUseCase",
      (container) =>
        new GetTvShowsOnTheAirUseCase({
          getTvShowsOnTheAirService: container.getTvShowsOnTheAirService,
        })
    );
  }
}

export { GetTvShowsOnTheAirProvider };
