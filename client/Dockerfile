FROM node:26.13.0-alpine3.24 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build-only

###
FROM nginx/nginx-unprivileged:1.30.6-alpine3.24

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build usr/src/app/dist /usr/share/nginx/html

EXPOSE 8080