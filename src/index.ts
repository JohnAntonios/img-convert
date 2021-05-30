import Fastify from "fastify";
import path from "path";
import * as eta from "eta";
import pov from "point-of-view";
import multipart from "fastify-multipart";
import imageUpload from "./controllers/imageUpload";
import indexPage from "./controllers/indexPage";

const fastify = Fastify({ logger: true });

fastify.register(pov, { engine: { eta }, root: path.resolve("views") });
fastify.register(multipart, { attachFieldsToBody: true });

fastify.get("/", indexPage);
fastify.post("/image-upload", imageUpload);

(async () => {
  try {
    await fastify.listen(3000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();