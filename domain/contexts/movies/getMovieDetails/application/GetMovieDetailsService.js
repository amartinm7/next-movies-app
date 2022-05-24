/* eslint-disable camelcase, no-console */
class GetMovieDetailsService {
  constructor({ getMovieDetailsRepository }) {
    this._getMovieDetailsRepository = getMovieDetailsRepository;
  }

  async execute({ id, language }) {
    return await this._getMovieDetailsRepository.execute({
      id,
      language,
    });
  }
}

export { GetMovieDetailsService };
