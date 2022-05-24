import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";

// @ts-ignore
export const getMovieDetails = async ({ id, language }) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  // @ts-ignore
  const getMovieDetailsUseCaseResponse = await beanContainer[
    "getMovieDetailsUseCase"
  ].execute({ id, language });
  return getMovieDetailsUseCaseResponse?.data;
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
    // @ts-ignore
    const movieDetails = await getMovieDetails({ ...req.query });
    res.json(movieDetails);
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
