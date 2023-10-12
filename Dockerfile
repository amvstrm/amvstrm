# syntax=docker/dockerfile:1
FROM node:18-slim as base
ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY --link package.json .
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=80

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]