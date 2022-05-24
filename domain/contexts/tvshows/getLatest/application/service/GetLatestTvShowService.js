/* eslint-disable camelcase, no-console */
class GetLatestTvShowService {
  constructor({ getLatestTvShowRepository }) {
    this._getLatestTvShowRepository = getLatestTvShowRepository;
  }

  async execute({ language }) {
    return await this._getLatestTvShowRepository.execute({ language });
  }
}

export { GetLatestTvShowService };
