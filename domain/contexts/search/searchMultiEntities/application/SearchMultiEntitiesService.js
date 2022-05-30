/* eslint-disable camelcase, no-console */
class SearchMultiEntitiesService {
  constructor({ searchMultiEntitiesRepository }) {
    this._searchMultiEntitiesRepository = searchMultiEntitiesRepository;
  }

  async execute({ language, keyword, page }) {
    return await this._searchMultiEntitiesRepository.execute({
      language,
      keyword,
      page,
    });
  }
}

export { SearchMultiEntitiesService };
