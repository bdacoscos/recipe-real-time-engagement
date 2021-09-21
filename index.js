const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)


// Pusher
const Pusher = require("pusher");

const event = new Pusher({
  appId: "1269932",
  key: "be9aea48efe85da61071",
  secret: "619a88b0677d0a169084",
  cluster: "us3",
  useTLS: true
});

event.trigger("my-channel", "my-event", {
  message: "hello world"
});
