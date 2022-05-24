import { GetAiringTodayRepository } from "./infrastructure/repository/GetAiringTodayRepository";
import { GetAiringTodayService } from "./application/service/GetAiringTodayService";
import { GetAiringTodayUseCase } from "./infrastructure/usecase/GetAiringTodayUseCase";
/* eslint-disable camelcase, no-console */
class GetAiringTodayProvider {
  constructor(container) {
    container.service(
      "getAiringTodayRepository",
      (container) =>
        new GetAiringTodayRepository(container.configuration.toJSON())
    );
    container.service(
      "getAiringTodayService",
      (container) =>
        new GetAiringTodayService({
          getAiringTodayRepository: container.getAiringTodayRepository,
        })
    );
    container.service(
      "getAiringTodayUseCase",
      (container) =>
        new GetAiringTodayUseCase({
          getAiringTodayService: container.getAiringTodayService,
        })
    );
  }
}

export default GetAiringTodayProvider;
