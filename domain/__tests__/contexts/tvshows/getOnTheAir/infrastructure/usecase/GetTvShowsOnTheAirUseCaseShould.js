import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import { GetTvShowsOnTheAirRepository } from "@/domain/contexts/tvshows/getOnTheAir/infrastructure/respository/GetTvShowsOnTheAirRepository";
import * as mockResponse from "./mockResponse.json" assert { type: "json" };

console.log("welcome! GetTvShowsOnTheAirUseCaseShould test");

describe("GetTvShowsOnTheAirUseCaseShould", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockRepository = jest.fn();
    GetTvShowsOnTheAirRepository.prototype.execute = mockRepository;
    mockRepository.mockReturnValue(Promise.resolve(mockResponse));
    it("should return the on the air tv shows", async function () {
      const result = await beanContainer.getTvShowsOnTheAirUseCase.execute({
        language: "es-ES",
      });
      expect(mockResponse).toEqual(result);
    });
  });
});
