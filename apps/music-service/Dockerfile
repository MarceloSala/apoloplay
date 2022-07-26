FROM node:16.15.0

WORKDIR /.

COPY package*.json ./

RUN npm install

COPY ./dist/apps/music-service /.

EXPOSE 3001

CMD node main.js
