const UserModel = require('../models/UserModel.js')

module.exports = {
    getUsers: (req, res) => {
        console.log('getting')
        UserModel.find((err, models) => {
            err ? res.status(500).send(err) : res.status(200).json(models);
        })
    },
    addUser: (req, res) => {
        console.log('adding?')
        let model = new UserModel()
        model.username = req.body.username
        model.password = req.body.password
        model.save(err => {
            err ? res.status(500).send(err) : res.status(200).json({message: 'User Created!'})
        })
    }
}