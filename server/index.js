const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()
const bodyParser = require('bodyParser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '..client/build')))

app.get('/api/hello', (req, res) => {

  res.json("hello world")

  console.log(`Sent!`)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

app.listen(port)

console.log(`Listening on ${port}!`)