/* eslint-disable camelcase, no-console */
class GetPeopleDetailsUseCase {
  constructor({ getPeopleDetailsService }) {
    this._getPeopleDetailsService = getPeopleDetailsService;
  }

  async execute({ language = "es-ES", id = "224513" }) {
    return await this._getPeopleDetailsService.execute({ id, language });
  }
}

export { GetPeopleDetailsUseCase };
