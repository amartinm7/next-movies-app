/* eslint-disable camelcase, no-console */
class SearchMultiEntitiesRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get searchMultiEntities
   * @param searchMultiEntitiesRepositoryRequest
   * @returns {*}
   */
  async execute({ language = "en-US", keyword, page = 1 }) {
    const urlPath = `/search/multi/?language=${language}&query=${keyword}&page=${page}&append_to_response=videos,images,credits`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { SearchMultiEntitiesRepository };
