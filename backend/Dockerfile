FROM node:12

WORKDIR /study-back

COPY package*.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]

