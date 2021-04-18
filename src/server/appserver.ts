const Comprehender = require("./comprehender.ts");
const axios = require('axios');
let comprehender = new Comprehender();
const express = require('express');
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
}
let output;

var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json())
app.use(cors());
const port = 3000
app.get('/', cors(corsOptions), (req, res) => {
    res.send('Hello, welcome to Notes')
});
app.get('/keywords', cors(corsOptions), (req, res) => {
    let text = req.headers.text;
    console.log(text);
    comprehender.comprehendText(text).then(response => {
        res.send((JSON.stringify(response.result.keywords, null, 2)));
    })
        .catch(err => {
            res.send(err);
        });

});
app.get('/concepts', cors(corsOptions), (req, res) => {
    let text = req.headers.text;
    console.log(text);
    comprehender.comprehendText(text).then(response => {
        res.send((JSON.stringify(response.result.concepts, null, 2)));
    })
        .catch(err => {
            res.send(err);
        });

});
app.post('/keywordsurl', cors(corsOptions), (req, res) => {
    let url = req.headers.url;
    console.log(url);
    comprehender.comprehendUrl(url).then(response => {
        res.send((JSON.stringify(response.result.keywords, null, 2)));
    })
        .catch(err => {
            res.send(err);
        });

});

app.listen(port, () => {
    console.log(`WOOOT WOOOT App Listening at http://localhost:${port}!`)
})
