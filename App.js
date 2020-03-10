
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://yvkrishna:yvkchowdary@krishna-m5fee.mongodb.net/mydata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('data base connected to mongo db')
    })
    .catch(err => {
        console.log(err);
    })

app.use(bodyParser.json());
app.use(require('./routes'))

app.listen(port, function () {
    console.log('app is running on ' + port)
})

