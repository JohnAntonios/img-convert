import { FastifyRequest, FastifyReply } from "fastify";
import { OUTPUT_FORMATS } from "../constants/outputFormats";

export default async (_: FastifyRequest, reply: FastifyReply) => {
  return reply.view("index", { outputFormats: Object.keys(OUTPUT_FORMATS) });
};
