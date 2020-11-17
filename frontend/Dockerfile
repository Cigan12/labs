FROM node:12

WORKDIR /study-front

COPY package*.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]

