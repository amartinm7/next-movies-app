import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import { GetLatestTvShowRepository } from "@/domain/contexts/tvshows/getLatest/infrastructure/repository/GetLatestTvShowRepository";
import * as mockResponse from "./mockResponse.json" assert { type: "json" };

console.log("welcome! GetLatestTvShowUseCaseShould test");

describe("GetLatestTvShowUseCaseShould", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockRepository = jest.fn();
    GetLatestTvShowRepository.prototype.execute = mockRepository;
    mockRepository.mockReturnValue(Promise.resolve(mockResponse));
    it("should return the lastest tv show", async function () {
      const result = await beanContainer.getLatestTvShowUseCase.execute({
        language: "es-ES",
      });
      expect(mockResponse).toEqual(result);
    });
  });
});
