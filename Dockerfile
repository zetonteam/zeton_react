FROM node:15

WORKDIR /usr/src/app

COPY package-lock.json package.json /usr/src/app/

RUN npm install

CMD ["npm", "start"]