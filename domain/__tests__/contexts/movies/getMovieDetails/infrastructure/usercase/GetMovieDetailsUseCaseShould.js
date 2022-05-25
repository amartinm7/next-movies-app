import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import * as mockMovieDetailsResponse from "./mockMovieDetailsResponse.json" assert { type: "json" };

import { GetMovieDetailsRepository } from "@/domain/contexts/movies/getMovieDetails/infrastructure/repository/GetMovieDetailsRepository";

console.log("welcome! GetMovieDetailsUseCaseShould test");

describe("GetMovieDetailsUseCaseShould", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockRepository = jest.fn();
    GetMovieDetailsRepository.prototype.execute = mockRepository;
    it("should return the movie details", async function () {
      mockRepository.mockReturnValue(Promise.resolve(mockMovieDetailsResponse));
      const request = { id: 526896, language: "es-ES" };
      const result = await beanContainer.getMovieDetailsUseCase.execute(
        request
      );
      expect(mockMovieDetailsResponse).toEqual(result);
    });
  });
});
