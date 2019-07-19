const express = require('express');
const mongoose = require('mongoose');
import axios from 'axios';
// const config = require('config');



//initialize express
const app = express();

//express body parser
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connnect to mongo database
mongoose.connect('mongodb://localhost/bookdb', {useNewUrlParser:true})
    .then(() => console.log("connected to mongo"))
    .catch(err => console.log(err));


app.get('/', function(req,res){
    res.send('ok');
})

//port
const port = process.env.PORT || 3001;

app.listen(port, () => console.log('server started on port 3001'));




