FROM node:12

WORKDIR /study-front

COPY package*.json .

COPY yarn.lock .

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]

