class GetTrendingRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get trending all, movies, tv show for day or week
   * @param getTrendingRepositoryRequest
   * @returns {*}
   */
  async execute({ resource, period, language }) {
    const urlPath = `/trending/${resource}/${period}?language=${language}&append_to_response=images,credits,keywords,reviews,videos`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetTrendingRepository };
