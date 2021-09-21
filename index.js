const express =require('express');
const path = require('path');
const app = express();
const Pusher = require("pusher");

const events = new Pusher({
    appId: "1269932",
    key: "be9aea48efe85da61071",
    secret: "619a88b0677d0a169084",
    cluster: "us3",
    useTLS: true
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    events.trigger("my-channel", "view-event", {
        message: "hello world"
    });
    res.sendFile(__dirname + 'public/index.html');
});

app.listen(3000, () => console.log('Listening on port 3000'));
