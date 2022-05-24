import nc from "next-connect";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import { NextApiRequest, NextApiResponse } from "next";

// @ts-ignore
export const getAiringToday = async ({ language }) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  // @ts-ignore
  const getLatestTvShowUseCaseResponse = await beanContainer[
    "getAiringTodayUseCase"
  ].execute({ language });
  return getLatestTvShowUseCaseResponse?.data;
};

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  // .use(someMiddleware())
  .get(async (req, res) => {
    const latestTvShow = await getAiringToday({
      language: req.query.language,
    });
    res.json(latestTvShow);
  })
  .post(async (req, res) => {
    res.send("Not implemented yet!!");
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
