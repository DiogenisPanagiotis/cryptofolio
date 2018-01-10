const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()
const bodyParser = require('body-parser')
const routes = require('./api/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '../client/build')))

routes(app, express)

app.listen(port)

console.log(`Listening on ${port}!`)