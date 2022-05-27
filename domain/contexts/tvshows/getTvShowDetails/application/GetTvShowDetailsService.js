/* eslint-disable camelcase, no-console */
class GetTvShowDetailsService {
  constructor({ getTvShowDetailsRepository }) {
    this._getTvShowDetailsRepository = getTvShowDetailsRepository;
  }

  async execute({ id = "66732", language = "es-ES" }) {
    return await this._getTvShowDetailsRepository.execute({ id, language });
  }
}

export { GetTvShowDetailsService };
