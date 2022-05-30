/* eslint-disable camelcase, no-console */
class SearchMultiEntitiesUseCase {
  constructor({ searchMultiEntitiesService }) {
    this._searchMultiEntitiesService = searchMultiEntitiesService;
  }

  async execute({ language = "en-EN", keyword, page }) {
    return await this._searchMultiEntitiesService.execute({
      language,
      keyword,
      page,
    });
  }
}

export { SearchMultiEntitiesUseCase };
