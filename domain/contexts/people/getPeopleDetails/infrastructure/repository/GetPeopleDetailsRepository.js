/* eslint-disable camelcase, no-console */
class GetPeopleDetailsRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * GetPeopleDetails
   * @param getPeopleDetailsRepositoryRequest
   * @returns {*}
   */
  async execute({ language = "es-ES", id = "224513" }) {
    const urlPath = `/person/${id}?language=${language}&append_to_response=images,movie_credits,tv_credits`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetPeopleDetailsRepository };
