import Fastify from "fastify";
import path from "path";
import * as eta from "eta";
import pov from "point-of-view";
import multipart from "fastify-multipart";
import fastifyStatic from "fastify-static";
import imageConvert from "./routes/imageConvert";
import indexPage from "./routes/indexPage";

const fastify = Fastify({ logger: true });

(async () => {
  // Middleware
  fastify.register(pov, { engine: { eta }, root: path.resolve("views") });
  fastify.register(multipart, { attachFieldsToBody: true });
  fastify.register(fastifyStatic, {
    root: path.resolve("assets-dist"),
  });

  // Routes
  fastify.register(imageConvert);
  fastify.register(indexPage);

  try {
    await fastify.listen(3000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
