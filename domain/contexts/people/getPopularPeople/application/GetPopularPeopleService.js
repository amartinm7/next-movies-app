/* eslint-disable camelcase, no-console */
class GetPopularPeopleService {
  constructor({ getPopularPeopleRepository }) {
    this._getPopularPeopleRepository = getPopularPeopleRepository;
  }

  async execute({ language = "es-ES" }) {
    return await this._getPopularPeopleRepository.execute({ language });
  }
}

export { GetPopularPeopleService };
