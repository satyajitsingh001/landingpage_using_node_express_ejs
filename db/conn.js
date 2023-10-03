const mongoose = require('mongoose');

const dbconnection = ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/nodedynamic',{
        useNewUrlParser : true,
        useUnifiedTopology :true
    })
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports = dbconnection