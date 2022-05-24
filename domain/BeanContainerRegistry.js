import { BeanContainer } from "./BeanContainer";
import { GetLatestTvShowProvider } from "./contexts/tvshows/getLatest/GetLatestTvShowProvider";
import { GetTvShowsOnTheAirProvider } from "./contexts/tvshows/getOnTheAir/GetTvShowsOnTheAirProvider";
import { GetConfigurationProvider } from "./helpers/config/GetConfigurationProvider";
import { GetTrendingProvider } from "@/domain/contexts/trending/getTrending/GetTrendingProvider";
import { GetMovieDetailsProvider } from "@/domain/contexts/movies/getMovieDetails/GetMovieDetailsProvider";
import GetAiringTodayProvider from "@/domain/contexts/tvshows/getAiringToday/GetAiringTodayProvider";

class BeanContainerRegistry {
  constructor() {
    this._beanContainer = new BeanContainer();
    new GetConfigurationProvider(this._beanContainer);
    new GetLatestTvShowProvider(this._beanContainer);
    new GetTvShowsOnTheAirProvider(this._beanContainer);
    new GetTrendingProvider(this._beanContainer);
    new GetMovieDetailsProvider(this._beanContainer);
    new GetAiringTodayProvider(this._beanContainer);
  }

  getBeanContainer() {
    return this._beanContainer;
  }
}

export { BeanContainerRegistry };
