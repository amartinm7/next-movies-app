/* eslint-disable camelcase, no-console */
class GetLatestTvShowUseCase {
  constructor({ getLatestTvShowService }) {
    this._getLatestTvShowService = getLatestTvShowService;
  }

  async execute({ language = "es-ES" }) {
    return this._getLatestTvShowService.execute({ language });
  }
}

export { GetLatestTvShowUseCase };
