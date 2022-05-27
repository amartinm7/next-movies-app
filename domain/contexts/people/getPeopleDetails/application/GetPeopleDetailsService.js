/* eslint-disable camelcase, no-console */
class GetPeopleDetailsService {
  constructor({ getPeopleDetailsRepository }) {
    this._getPeopleDetailsRepository = getPeopleDetailsRepository;
  }

  async execute({ language = "es-ES", id = "224513" }) {
    return await this._getPeopleDetailsRepository.execute({
      id,
      language,
    });
  }
}

export { GetPeopleDetailsService };
