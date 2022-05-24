const DEFAULT_RESOURCE = "all";
const DEFAULT_PERIOD = "week";

const validApiRoutesByResource = ["movie", "tv", "person", DEFAULT_RESOURCE];

const validApiRoutesByPeriod = [DEFAULT_PERIOD, "day"];

/* eslint-disable camelcase, no-console */
class GetTrendingUseCase {
  constructor({ getTrendingService }) {
    this._getTrendingService = getTrendingService;
  }

  async execute({
    resource = DEFAULT_RESOURCE,
    period = DEFAULT_PERIOD,
    language = "es-ES",
  }) {
    return this._getTrendingService.execute({
      resource: validApiRoutesByResource.includes(resource)
        ? resource
        : DEFAULT_RESOURCE,
      period: validApiRoutesByPeriod.includes(period) ? period : DEFAULT_PERIOD,
      language,
    });
  }
}

export { GetTrendingUseCase };
