/* eslint-disable camelcase, no-console */
class GetTvShowsOnTheAirUseCase {
  constructor({ getTvShowsOnTheAirService }) {
    this._getTvShowsOnTheAirService = getTvShowsOnTheAirService;
  }

  async execute({ language = "es-ES" }) {
    return this._getTvShowsOnTheAirService.execute({ language });
  }
}

export { GetTvShowsOnTheAirUseCase };
