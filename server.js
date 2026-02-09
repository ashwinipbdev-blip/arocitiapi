const { config } = require('dotenv');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger  = require('morgan')
dotenv.config();
app.use(express.json());
app.use(logger('dev'))
// app.use()


app.get('/user',(req,res)=>{
  res.send({
    status:true,
    message:"getting users"
  })
})

app.listen(process.env.PORT,() =>{
  console.log("server connected to ",process.env.PORT, "PORT")
})