const Nylas = require('nylas')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

const tokens = process.env.ACCESS_TOKEN_ARRAY.split(',')

async function retrieveMessages(ACCESS_TOKEN, resolve, reject) {

    const nylas = Nylas.with(ACCESS_TOKEN);
    let counter = 0;
    let run = true;
    let messages = []

    while(run) {
        await nylas.messages.list({limit: 100, offset: (counter * 100), received_before: Math.floor(Date.now() / 1000), received_after: Math.floor(Date.now() / 1000 - 604800)})
        .then(res => {
            messages.push(...res)
            if(res.length < 100) {
                run = false
            }
        })
        .catch(err => {
            console.log("Bad Token: " + x)
            console.log(" Error:" + err)
            reject(err)
            run = false
        })
        counter++;
    }

    resolve(messages);

}

async function run() {

    let promises = tokens.map(function (x) {
        return new Promise(function(resolve,reject) {
            retrieveMessages(x, resolve, reject)
        })
    })

    Promise.all(promises).then((values) => {
        let response; 
        response = values.flat(1).sort(function(a, b) {
            return b.date - a.date;
        })
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

}

(async()=>{await run()})()