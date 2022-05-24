/* eslint-disable camelcase, no-console */
class GetAiringTodayUseCase {
  constructor({ getAiringTodayService }) {
    this._getAiringTodayService = getAiringTodayService;
  }

  async execute({ language = "es-ES" }) {
    return this._getAiringTodayService.execute({ language });
  }
}

export { GetAiringTodayUseCase };
