import { FastifyRequest, FastifyReply } from "fastify";

export default async (_: FastifyRequest, reply: FastifyReply) => {
  return reply.view("index");
};