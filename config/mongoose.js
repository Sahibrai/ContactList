if(process.env.NODE_ENV !=='production'){
  require('dotenv').config();
}
const mongoose = require('mongoose');
mongoose.connect(process.env.URL);

const db= mongoose.connection
db.on('error',console.error.bind(console,'error in database')) // errors

db.once('open',function(){
  console.log("Successfully coonected to database")
})