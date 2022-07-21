

const mongoose = require("mongoose");
const express = require("express");

var cors = require('cors') 
const path = require('path')



const app = express()

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/config.env'});

const port = process.env.PORT ;

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})
mongoose.connect(
 process.env.mongoURI,
 { useUnifiedTopology: true, useNewUrlParser: true },
 () => console.log("connected to db"))


// if(process.env.NODE_ENV==='production')
// {

//   app.use(express.static(path.join(__dirname,"client/build")));
//   app.get('*',(req,res)=>
//   {
//     res.sendFile(path.join(__dirname,"client","build",'index.html'));
//   })
// }

