import { FastifyInstance } from "fastify";
import { INDEX } from "../constants/routes";
import indexPage from "../controllers/indexPage";

export default async (fastify: FastifyInstance) => {
  fastify.get(INDEX, indexPage);
};
