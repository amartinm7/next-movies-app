import Configuration from "./Configuration";
import GetAxiosRequest from "../axios/GetAxiosRequest";
import axios from "axios";

// TO BE INJECTED
const accessToken = process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG;
const baseURL = "https://api.themoviedb.org/3";
const axiosRequest = new GetAxiosRequest({ accessToken, baseURL });

/* eslint-disable camelcase, no-console */
class GetConfigurationProvider {
  constructor(container) {
    container.service(
      "configuration",
      (container) => new Configuration({ axiosRequest, axios })
    );
  }
}

export { GetConfigurationProvider };
