const fs = require('fs');
const Koa = require('koa');
const mount = require('koa-mount');

const app = new Koa();

app.use(
  mount('/favicon.ico', (ctx) => {
    ctx.status = 200;
  })
)

app.use(
  mount('/game', ctx => {

  })
)

app.use(
  mount('/', (ctx) => {
    ctx.status = 200;
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
  })
)

app.listen(3000);
