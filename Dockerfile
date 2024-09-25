FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=secret,id=DATABASE_URL,env=DATABASE_URL 

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]