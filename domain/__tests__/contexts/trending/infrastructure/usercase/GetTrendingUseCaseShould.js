import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import * as mockTrendingAllResponse from "./mockTrendingAllResponse.json" assert { type: "json" };
import * as mockTrendingMoviesResponse from "./mockTrendingMoviesResponse.json" assert { type: "json" };
import * as mockTrendingPersonsResponse from "./mockTrendingPersonsResponse.json" assert { type: "json" };
import * as mockTrendingTvShowsResponse from "./mockTrendingTvShowsResponse.json" assert { type: "json" };

import { GetTrendingRepository } from "@/domain/contexts/trending/getTrending/infrastructure/repository/GetTrendingRepository";

console.log("welcome! GetTrendingUseCaseShould test");

describe("GetTrendingUseCaseShould", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockRepository = jest.fn();
    GetTrendingRepository.prototype.execute = mockRepository;
    it("should return the trending all", async function () {
      mockRepository.mockReturnValue(Promise.resolve(mockTrendingAllResponse));
      const request = { resource: "all", period: "week", language: "es-ES" };
      const result = await beanContainer.getTrendingUseCase.execute(request);
      expect(mockTrendingAllResponse).toEqual(result);
    });
    it("should return the trending movies", async function () {
      mockRepository.mockReturnValue(
        Promise.resolve(mockTrendingMoviesResponse)
      );
      const request = { resource: "movies", period: "week", language: "es-ES" };
      const result = await beanContainer.getTrendingUseCase.execute(request);
      expect(mockTrendingMoviesResponse).toEqual(result);
    });
    it("should return the trending persons", async function () {
      mockRepository.mockReturnValue(
        Promise.resolve(mockTrendingPersonsResponse)
      );
      const request = {
        resource: "persons",
        period: "week",
        language: "es-ES",
      };
      const result = await beanContainer.getTrendingUseCase.execute(request);
      expect(mockTrendingPersonsResponse).toEqual(result);
    });
    it("should return the trending tvshows", async function () {
      mockRepository.mockReturnValue(
        Promise.resolve(mockTrendingTvShowsResponse)
      );
      const request = {
        resource: "tvshows",
        period: "week",
        language: "es-ES",
      };
      const result = await beanContainer.getTrendingUseCase.execute(request);
      expect(mockTrendingTvShowsResponse).toEqual(result);
    });
  });
});
