FROM node:14-alpine
COPY package*.json ./
RUN npm i
COPY . .
RUN npm rebuild esbuild && npm run compile
EXPOSE 80
ENV NODE_ENV=production
CMD npx knex migrate:latest && node ./src/index.js