FROM node:14-alpine
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 80
ENV NODE_ENV=production
CMD npx knex migrate:latest && node ./src/index.js