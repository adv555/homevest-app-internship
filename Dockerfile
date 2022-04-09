FROM node:14

WORKDIR /app

COPY . .

RUN npm run install:all


CMD ["node", "package.json"]