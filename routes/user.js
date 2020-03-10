const express = require('express');
const router = express.Router();
const User = require('../model/usermodel')

router.get('/', function (req, res) {
    User.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.json({
                message: 'server error'
            })
        })
});

router.get('/:id', function (req, res) {
    User.findById({ _id: req.params.id })
        .then((data) => {
            res.status(200).json(data)
        })
})

router.post('/', function (req, res) {
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })

    user.save()
        .then(data => {
            res.json({
                message: 'user saved successfully',
                user: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'server error' })
        })
});

router.put('/:id', function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            console.log('user successfully updated');
            res.status(201).json({ message: 'user successfully updated' })
        })
        .catch(err => {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status.json({ error: 'bad request' });
            }
            res.json({
                error: 'server error'
            })
        })
});

router.delete('/:id', function (req, res) {
    User.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            res.json({
                message: 'user Deleted successfully'
            })
        })
        .catch(err => {
            console.log(err);
            if (err.kind === 'ObjectId') {
                res.status.json({ err: 'bad request' })
            }
            res.json({
                error: 'server error'
            })
        })
})

module.exports = router;