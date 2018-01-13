const path = require('path')
const controller = require('./controllers/controller.js')

const mongoose = require('mongoose')

const db = process.env.MONGODB_URI || 'mongodb://localhost/cryptofolio'

mongoose.connect(db, (error) => {
    if (error) {
        console.log(`Failed to connect to ${db}`)
    } else {
        console.log(`Connected to ${db}`)
    }
})

module.exports = function (app, express) {

    const router = express.Router()

    router.route('/users')
        .get(controller.getUsers)
        .post(controller.addUser)

    app.use('/api', router)

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })

    app.get('*', (req, res) => {
      res.send('what???', 404)
    })

}