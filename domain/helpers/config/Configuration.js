/* eslint-disable camelcase, no-console */
class Configuration {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  toJSON() {
    return {
      axios: this._axios,
      axiosRequest: this._axiosRequest,
    };
  }
}

export default Configuration;
