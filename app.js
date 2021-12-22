const express=require('express');
const mongoose = require('mongoose');
const app=express();



require('./db/conn');

app.use(express.json());


app.use(require('./router/auth'));





app.get('/', (req,res)=> {
    res.send('HELLO THERE');

});

const middleware =(req, res, next) =>
{
    console.log('hello middle')
    next()
}

app.get('/createv', (req,res)=> {
    res.send('CREATE EVENT');

});

app.get('/event', (req,res) => {
    res.send('EVENTS:');
})

app.get('/about' ,middleware, (req,res)=> {
    res.send('DARTH SIDIOUS AND LORD VADER');

});
  
app.listen(2000,()=>{
    console.log('server is running');
});


app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));






