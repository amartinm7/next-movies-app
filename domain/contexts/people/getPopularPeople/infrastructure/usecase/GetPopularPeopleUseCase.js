/* eslint-disable camelcase, no-console */
class GetPopularPeopleUseCase {
  constructor({ getPopularPeopleService }) {
    this._getPopularPeopleService = getPopularPeopleService;
  }

  async execute({ language = "es-ES" }) {
    return await this._getPopularPeopleService.execute({ language });
  }
}

export { GetPopularPeopleUseCase };
