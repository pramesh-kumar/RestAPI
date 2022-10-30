const express = require("express")
const app = express();
require("./db/conn");


// to read json data from incoming request 
app.use(express.json())

const studentRouter = require('./routers/student')
// register router  to use router 
app.use(studentRouter);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})