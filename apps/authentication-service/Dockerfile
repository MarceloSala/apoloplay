FROM node:16.15.0

WORKDIR /app

COPY package*.json ./

COPY ./dist/apps/authentication-service ./

EXPOSE 3000

RUN npm install --production

CMD node main.js
