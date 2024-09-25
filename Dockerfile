FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN --mount=type=secret,id=DATABASE_URL,env=DATABASE_URL npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]