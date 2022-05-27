/* eslint-disable camelcase, no-console */
class GetPopularPeopleRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * GetPopularPeople
   * @param getPopularPeopleRepositoryRequest
   * @returns {*}
   */
  async execute({ language = "es-ES" }) {
    const urlPath = `/person/popular?language=${language}&append_to_response=videos,images,credits`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetPopularPeopleRepository };
