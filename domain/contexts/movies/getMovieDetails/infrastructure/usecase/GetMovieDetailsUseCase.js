const DEFAULT_RESOURCE = "all";
const DEFAULT_PERIOD = "week";

const validRoutesByResource = {
  movies: "movie",
  tvshows: "tv",
  persons: "person",
  all: DEFAULT_RESOURCE,
};

const validRoutesByPeriod = [DEFAULT_PERIOD, "day"];

/* eslint-disable camelcase, no-console */
class GetMovieDetailsUseCase {
  constructor({ getMovieDetailsService }) {
    this._getMovieDetailsService = getMovieDetailsService;
  }

  async execute({ id = 526896, language = "es-ES" }) {
    return this._getMovieDetailsService.execute({
      id,
      language,
    });
  }
}

export { GetMovieDetailsUseCase };
