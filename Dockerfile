FROM node:16-alpine

RUN npm update -g npm

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT ["npm", "run", "start"]
