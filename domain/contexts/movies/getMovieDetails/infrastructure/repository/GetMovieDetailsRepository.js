class GetMovieDetailsRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get trending all, movies, tv show for day or week
   * @param getDetailsRepositoryRequest
   * @returns {*}
   */
  async execute({ id, language }) {
    const urlPath = `/movie/${id}?language=${language}&append_to_response=images,credits,keywords,reviews,videos`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetMovieDetailsRepository };
