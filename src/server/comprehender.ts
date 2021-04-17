const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: '270CauCGrsjx2d_83oVaXfAH2tGQjwzBEbd0Jcz1eIoO' }),
    version: '2018-04-05',
    serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com'
});
let Output;
module.exports = class Comprehender {
    comprehendText(text) {
            return nlu.analyze(
            {
                html: text, // Buffer or String
                features: {
                    concepts: {},
                    keywords: {}
                }
            })

    }
    comprehendUrl(link) {
        return nlu.analyze(
            {
                url: link, // Buffer or String
                features: {
                    concepts: {},
                    keywords: {}
                }
            })
            //.then(response => {
            //     Output = response.result
            //     //console.log(JSON.stringify(response.result, null, 2));
            // })
            // .catch(err => {
            //     Output = err;
            //     //console.log('error: ', err);
            // })
    }
}


