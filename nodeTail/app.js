const express =require("express");
const app=express();
const path =require("path")


//setting up view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use("/public",express.static("public"))

app.get("/",(req,res)=>{
    res.render("index",{})
})

app.get("/login",(req,res)=>{
    res.render("login",{})
})

//config server
const port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log(`Server listening at ${port}`);
})