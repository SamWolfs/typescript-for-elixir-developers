FROM node:16-alpine

RUN npm update -g npm

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]