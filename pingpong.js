const express = require('express')

const app = express() // Make an express server object


app.get('/ping', function (req,res,nextFn) {
    console.log('Someone sent a ping. Quick! Send a pong!!')
    res.send('pong')
    console.log('k... sent a pong')
    nextFn() // runs the next function IN THIS FILE!!
})


// Tell the server to listen for HTTP requests on port 3000
app.listen(3000,announceServerStarted)

function announceServerStarted(){
    // log once the server has started
    console.log('The server is listening...')
}