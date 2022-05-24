class GetLatestTvShowRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get getLatest tv show
   * @param getLatestTvShowRepositoryRequest
   * @returns {*}
   */
  async execute({ language }) {
    const urlPath = `/tv/latest?language=${language}&append_to_response=images,credits,keywords,reviews,videos`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetLatestTvShowRepository };
