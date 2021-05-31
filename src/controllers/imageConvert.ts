import { FastifyRequest, FastifyReply } from "fastify";
import { MultipartFile } from "fastify-multipart";
import sharp from "sharp";
import { OutputFormats } from "../constants/outputFormats";

interface ImageConvertRequest {
  Body: {
    outputFormat: {
      value: OutputFormats;
    };
    inputImage: MultipartFile;
  };
}

export default async (
  request: FastifyRequest<ImageConvertRequest>,
  reply: FastifyReply
) => {
  const outputFormat = request.body.outputFormat.value;
  const inputImage = request.body.inputImage;

  const imageBuffer = await inputImage.toBuffer();
  const outBuffer = await sharp(imageBuffer).toFormat(outputFormat).toBuffer();

  reply.header(
    "Content-Disposition",
    `attachment; filename=${inputImage.filename}.${outputFormat}`
  );
  reply.header("Content-Type", `image/${outputFormat}`);
  reply.type("application/octet-stream");

  return reply.send(outBuffer);
};
