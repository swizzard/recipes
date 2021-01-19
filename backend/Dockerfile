FROM node:latest

WORKDIR /backend

COPY package.json /backend/package.json
COPY . /backend
RUN npm install

CMD ["yarn", "dev"]
