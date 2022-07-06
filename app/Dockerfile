FROM node:15-alpine

WORKDIR /app
ENV NODE_ENV production

COPY ./package*.json .
COPY index.js .

RUN npm ci --only=production

EXPOSE 3000
ENTRYPOINT ["node", "index.js"]