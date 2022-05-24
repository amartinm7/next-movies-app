/* eslint-disable camelcase, no-console */
import { GetTrendingRepository } from "@/domain/contexts/trending/getTrending/infrastructure/repository/GetTrendingRepository";
import { GetTrendingService } from "@/domain/contexts/trending/getTrending/application/GetTrendingService";
import { GetTrendingUseCase } from "@/domain/contexts/trending/getTrending/infrastructure/usecase/GetTrendingUseCase";

class GetTrendingProvider {
  constructor(container) {
    container.service(
      "getTrendingRepository",
      (container) => new GetTrendingRepository(container.configuration.toJSON())
    );
    container.service(
      "getTrendingService",
      (container) =>
        new GetTrendingService({
          getTrendingRepository: container.getTrendingRepository,
        })
    );
    container.service(
      "getTrendingUseCase",
      (container) =>
        new GetTrendingUseCase({
          getTrendingService: container.getTrendingService,
        })
    );
  }
}

export { GetTrendingProvider };
