const Comprehender = require("./comprehender.ts");
const axios = require('axios');
let comprehender = new Comprehender();
// comprehender.comprehendText("Jeff Bezos says hi").then(response => {
//         Output = response.result
//         //return Output
//         console.log(JSON.stringify(response.result, null, 2));
//     })
//     .catch(err => {
//         Output = err
//         //return Output;
//         console.log('error: ', err);
//     });
const express = require('express');
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
}
let output;

var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json())
const port = 3000
app.get('/', cors(corsOptions), (req, res) => {
    res.send('Hello, welcome to Notes')
});
app.get('/keywords', cors(corsOptions), (req, res) => {
    let text = req.body.text;
    console.log(text);
    comprehender.comprehendText(text).then(response => {
        res.send((JSON.stringify(response.result.keywords, null, 2)));
    })
        .catch(err => {
            res.send(err);
        });

});
app.get('/questions', cors(corsOptions), (req, res)=>{
    app.use(bodyParser.text({ type: 'text/html' }));
    let text = req.body.text;
    axios.post('https://gs4ossx7yj.execute-api.us-east-1.amazonaws.com/dev/text', { "text": text },{headers:{'Content-Type':'text/plain'}})
    .then(response => {
        let qnapair = response.data.map(item => {
            const container ={};
            container['QuestionPrompt'] = item.QuestionPrompt;
            container['CorrectAnswer'] = item.CorrectAnswer;
            return container;
        })
        res.send(qnapair);
    })
    .catch(error => {
        output = error;
        res.send(error)
    });
});

app.listen(port, () => {
    console.log(`WOOOT WOOOT App Listening at http://localhost:${port}!`)
})
