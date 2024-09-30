FROM node:18-alpine AS base

RUN npm i -g pnpm@9.11.0

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY apps/server/prisma ./prisma/
RUN pnpm install

FROM base AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm server:build
RUN pnpm prune --prod

FROM base AS deploy

WORKDIR /app
COPY --from=build /app/apps/server/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules

CMD [ "node", "dist/main.js" ]