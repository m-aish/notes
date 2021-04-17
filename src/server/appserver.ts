const Comprehender = require("./comprehender.ts");
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
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json())
const port = 3000
app.get('/', cors(corsOptions), (req, res) => {
    res.send('Hello, welcome to Notes')
});
app.get('/keywords', cors(corsOptions), (req,res)=>{
    let text = req.body.text;
    console.log(text);
    comprehender.comprehendText(text).then(response => {
        Output = response.result
        res.send((JSON.stringify(response.result.keywords, null, 2)));
    })
    .catch(err => {
        Output = err
        res.send(err);
    });

})
app.listen(port, ()=>{
    console.log(`WOOOT WOOOT App Listening at http://localhost:${port}!`)
  })

