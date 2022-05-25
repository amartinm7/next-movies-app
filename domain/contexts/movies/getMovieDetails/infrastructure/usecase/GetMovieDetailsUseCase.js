/* eslint-disable camelcase, no-console */
class GetMovieDetailsUseCase {
  constructor({ getMovieDetailsService }) {
    this._getMovieDetailsService = getMovieDetailsService;
  }

  async execute({ id = "526896", language = "es-ES" }) {
    return this._getMovieDetailsService.execute({
      id,
      language,
    });
  }
}

export { GetMovieDetailsUseCase };
