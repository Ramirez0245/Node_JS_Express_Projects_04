const express = require('express');
const mongoose = require('mongoose');
const app = express();

//mongodb+srv://culexz0:<789741Xt>@cluster0-qb9lb.mongodb.net/<dbname>?retryWrites=true&w=majority
//789741Xt

/*//Middleware, a function when routes are being hit.
app.use('/post', () =>
{
    console.log('This is a middleware')
});*/

mongoose.connect('mongodb+srv://culexz0:<789741Xt>@cluster0-qb9lb.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//ROUTES
app.get('/', (req, res) =>
{
    res.send('We are on home')
});
app.get('/post', (req, res) =>
{
    res.send('We are on post')
});

//HOW DO WE START LISTENING?
app.listen(3000);

//I'm using mLab as database