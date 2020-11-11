const Koa = require('koa');
const Config = require('./config.json');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(Config.port);
