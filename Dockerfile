FROM node:14-alpine

WORKDIR /img-convert-webapp

COPY . .

RUN yarn

RUN yarn build:server

RUN yarn build:assets

ENTRYPOINT [ "yarn", "start" ]