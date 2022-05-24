/* eslint-disable camelcase, no-console */
class GetAiringTodayRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * GetAiringToday tv show
   * @param getAiringTodayRepositoryRequest
   * @returns {*}
   */
  async execute({ language }) {
    const urlPath = `/tv/airing_today?language=${language}&append_to_response=images,credits,keywords,reviews,videos`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    return response;
  }
}

export { GetAiringTodayRepository };
