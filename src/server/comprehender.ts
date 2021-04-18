const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const APIkey = require('../../abma.ts');
const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: APIkey }),
    version: '2018-04-05',
    serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com'
});
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
    }
}


