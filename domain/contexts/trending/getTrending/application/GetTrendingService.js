/* eslint-disable camelcase, no-console */
class GetTrendingService {
  constructor({ getTrendingRepository }) {
    this._getTrendingRepository = getTrendingRepository;
  }

  async execute({ resource, period, language }) {
    return await this._getTrendingRepository.execute({
      resource,
      period,
      language,
    });
  }
}

export { GetTrendingService };
