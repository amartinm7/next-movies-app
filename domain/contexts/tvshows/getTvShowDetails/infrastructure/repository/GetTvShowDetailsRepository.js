/* eslint-disable camelcase, no-console */
class GetTvShowDetailsRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get getTvShowDetails
   * @param getTvShowDetailsRepositoryRequest
   * @returns {*}
   */
  async execute({ id = "66732", language = "es-ES" }) {
    const urlPath = `/tv/${id}?language=${language}&append_to_response=videos,images,credits`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetTvShowDetailsRepository };
