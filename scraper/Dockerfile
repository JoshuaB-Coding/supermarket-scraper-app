FROM node:15-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

EXPOSE 5000

# RUN yarn && yarn add typescript tsc ts-node && yarn build
CMD [ "node", "./dist/v1/index.js" ]
