FROM node:latest

WORKDIR /server
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]