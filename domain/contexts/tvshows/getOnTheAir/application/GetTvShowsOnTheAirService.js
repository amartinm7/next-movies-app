/* eslint-disable camelcase, no-console */
class GetTvShowsOnTheAirService {
  constructor({ getTvShowsOnTheAirRepository }) {
    this._getTvShowsOnTheAirRepository = getTvShowsOnTheAirRepository;
  }

  async execute({ language }) {
    return await this._getTvShowsOnTheAirRepository.execute({ language });
  }
}

export { GetTvShowsOnTheAirService };
