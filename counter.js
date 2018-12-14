const express = require('express')

const app = express() // Make an express server object
let value = 0

app.use(express.static(__dirname + '/public'))


app.post('/api/increment', function (req,res,nextFn) {
    value += 1
    res.json(value)
    console.log('adding 1, sent', value)
})

app.post('/api/decrement', function (req,res,nextFn) {
    value -= 1
    res.json(value)
    console.log('subtracting 1, sent', value)
})

app.post('/api/reset', function (req,res,nextFn) {
    value = 0
    res.json(value)
    console.log('sent', value)
})

app.get('/api/value', function (req,res,nextFn) {
    res.json(value)
    console.log('sent', value)
})


// Tell the server to listen for HTTP requests on port 3000
app.listen(3000,announceServerStarted)

function announceServerStarted(){
    // log once the server has started
    console.log('The server is listening...')
}