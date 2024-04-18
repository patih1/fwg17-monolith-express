FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8888

CMD ["node", "index.js"]