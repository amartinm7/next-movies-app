/* eslint-disable camelcase, no-console */
class GetAxiosRequest {
  constructor({ accessToken, baseURL }) {
    this._accessToken = accessToken
    this._baseURL = baseURL
  }

  getRequest(urlPath) {
    const vm = this
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${vm._accessToken}`
    }
    const url = `${this._baseURL}${urlPath}`
    return {
      method: 'get',
      url,
      headers
    }
  }
}

export default GetAxiosRequest
