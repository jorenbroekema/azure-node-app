# TODO App

NodeJS TODO app with docker

## Building

We have a Dockerfile for the app.

To build the image:

```sh
npm run build
```

The app image should be built and pushed upon pushes to main git branch, since the source will have changed, and the source is copied to the image to make the container isolated from its environment.

## Local development

For local development we use docker-compose, this makes it easy to run multiple containers and have things like db persistence, mounted source directory and shared network handled easily.

To start the containers, run `npm run up`. To stop them, `npm run down`.

Additionally, the app container is started with a custom command that allows you to run the app:

- For dev `npm run dev` which uses `nodemon` for watchmode
- For prod `npm run prod` which maps to port 80 and starts the app in production mode
- For tests `npm run test` | `npm run test:watch` | `npm run test:ci`

## Initialize database

The table for this application needs to be created at the start:

```sh
npm run migrate
```

If you want to start with some dummy data, additionally also run the seed

```sh
npm run seed
```

## Deployment Azure

The PostgreSQL database we use in production is an Azure Managed PostgresSQL database.
For the app, we use Azure WebApp and we deploy from our built and published docker image.

Anytime we do a push to `main` branch, it will rebuild the docker image, push this image, and deploy to Azure with the latest image.
