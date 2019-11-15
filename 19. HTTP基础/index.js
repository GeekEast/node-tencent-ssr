const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');
const play = require('./game');

const faviconRouter = (req, res, url) => {
  res.end();
}

const gameRouter = (req, res, url) => {
  const query = queryString.parse(url.query);
  const action = query.action;
  const result = play(action);
  res.end(result);
}
const rootRouter = (req, res, url) => {
  // res.writeHead(200);
  // res.write("root")
  // res.end();
  fs.createReadStream(__dirname + "/index.html").pipe(res)
}


http.createServer((req, res) => {
  const URL = url.parse(req.url);
  if (URL.pathname === '/favicon.ico') return faviconRouter(req, res, URL);
  if (URL.pathname === '/game') return gameRouter(req, res, URL);
  if (URL.pathname === '/') return rootRouter(req, res, URL);
}).listen(3000);
