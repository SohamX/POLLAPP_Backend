const express=require('express');
const mongoose = require('mongoose');
const router = require('./router/auth');
const app=express();
const PORT=2000;



require('./db/conn');
require('./model/usr');
app.use(express.json());
app.use(require('./router/auth'));
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


const middleware =(req, res, next) =>
{
    console.log('hello middle')
    next()
}



  
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});











