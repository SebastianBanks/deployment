const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1fb3e376b6f440fb99f30672331f0ce7',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

let colors = []

app.post("/api/color", (req, res) => {
    let {color} = req.body
    color = color.trim()
    rollbar.log(`Successfully added color`, {author: "User", type: "manual"})
    colors.push(color)

    res.status(200).send(colors)
})


app.use(rollbar.errorHandler())
app.use(express.static(path.join(__dirname, "../")))

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})