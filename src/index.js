require('dotenv').config();
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const router = require('./routes/todos');

const port = process.env.NODE_ENV === 'production' ? 80 : 5000;

const app = new Koa();
app.use(bodyParser());

// Using Vite instead of koa-static in dev
// For prod we compile to dist and serve that
if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.resolve('src', 'vue', 'dist')));
} else {
  app.use(cors());
}

app.use(router.routes());

module.exports = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
