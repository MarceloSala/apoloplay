FROM node:16.15.0

WORKDIR /app

COPY package*.json ./

COPY ./dist/apps/music-service ./

EXPOSE 3001

RUN npm install --production

CMD node main.js
