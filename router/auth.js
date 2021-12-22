const express=require('express');
const router=express.Router();
var MongoClient=require('mongodb').MongoClient;
const app= express();


const db='mongodb+srv://pollapp:poll192807@cluster0.elwcj.mongodb.net/pollapp?retryWrites=true&w=majority'


router.get('/', (req,res)=> {
    res.send('HELLO THERE from auth');

});













module.exports =router;
