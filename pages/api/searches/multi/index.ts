import nc from "next-connect";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import { NextApiRequest, NextApiResponse } from "next";

// @ts-ignore
export const searchMulti = async ({ language, keyword, page }) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  // @ts-ignore
  const searchMultiEntitiesCaseResponse = await beanContainer[
    "searchMultiEntitiesUseCase"
  ].execute({ language, keyword, page });
  return searchMultiEntitiesCaseResponse?.data;
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
    const searches = await searchMulti({
      language: req.query.language,
      keyword: req.query.keyword,
      page: req.query.page,
    });
    res.json(searches);
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
