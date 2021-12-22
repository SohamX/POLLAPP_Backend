const mongoose =require('mongoose');

const db='mongodb+srv://pollapp:poll192807@cluster0.elwcj.mongodb.net/pollapp?retryWrites=true&w=majority'

mongoose.connect(db).then(()=> {
    console.log('Connected to mongo!!!!!!!')
}).catch((err)=> 
    console.log(err));