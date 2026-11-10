FROM node:26.13.0-alpine3.24

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

USER node

COPY --chown=node:node ./src ./src

EXPOSE 3000

CMD ["node", "src/app.ts"]