FROM node:16.15.0

WORKDIR /.

COPY package*.json ./

RUN npm install

COPY ./dist/apps/authentication-service /.

EXPOSE 3000

CMD node main.js
