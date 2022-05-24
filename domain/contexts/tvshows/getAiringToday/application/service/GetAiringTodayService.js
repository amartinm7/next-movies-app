/* eslint-disable camelcase, no-console */
class GetAiringTodayService {
  constructor({ getAiringTodayRepository }) {
    this._getAiringTodayRepository = getAiringTodayRepository;
  }

  async execute({ language }) {
    return await this._getAiringTodayRepository.execute({ language });
  }
}

export { GetAiringTodayService };
