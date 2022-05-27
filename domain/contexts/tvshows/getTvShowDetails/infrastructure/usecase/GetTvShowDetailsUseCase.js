/* eslint-disable camelcase, no-console */
class GetTvShowDetailsUseCase {
  constructor({ getTvShowDetailsService }) {
    this._getTvShowDetailsService = getTvShowDetailsService;
  }

  async execute({ id = "66732", language = "es-ES" }) {
    return await this._getTvShowDetailsService.execute({ id, language });
  }
}

export { GetTvShowDetailsUseCase };
