const express = require("express");


const app = express();

app.use(express.json());

app.use(myMiddleWare);

function myMiddleWare (req, res, next){
  console.log("Inside the middle ware I created");
  next(); // It will pass on the control to the next step
}
/**
 * Stitch the routes to the server
 */

require("./routes/idea.routes")(app);

/** 
 * Starting Server
 */
app.listen(8080, ()=>{
  console.log("Server started");
})