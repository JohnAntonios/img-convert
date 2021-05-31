import { FastifyInstance } from "fastify";
import { IMAGE_CONVERT } from "../constants/routes";
import imageConvert from "../controllers/imageConvert";

export default async (fastify: FastifyInstance) => {
  fastify.post(IMAGE_CONVERT, imageConvert);
};
