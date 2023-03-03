const express= require("express")
const fs = require("fs")
const path = require("path")
const app = express();
const port = 80;

//for serving static files
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//set the template engine pug
app.set('view engine', 'pug')


//set the views directory
app.set("views",path.join(__dirname,"views"))

//our pug demo endpoint

// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there thank you for learn pug to me' })
// })

app.get("/",(req,res)=>{
    const con= "this is form"
    const params = {'title':"this is title",'content':con}
    res.status(200).render('index.pug',params);
})
/*
app.post("/",(req,res)=>{
     
    nam = req.body.name;
    email=req.body.email;
    let userdetails = `the name of client ${nam} and email is ${email}`
     fs.writeFileSync('output.txt',userdetails)
    console.log(req.body)
    const params = {'message':"this form is submitted"}
    res.status(200).render('index.pug',params);
})
*/



// app.get("/",(req,res)=>{
//     res.send("Hello  welcome")
// })

app.get("/about",(req,res)=>{
    res.status(200).send("Hello   about welcome")
})


app.listen(port,()=>{
    console.log(`the application is runnnig on ${port}`)
})







// for save the data in database


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mycart');
   console.log("fjfgg")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


var myinfoschema = new mongoose.Schema({
  name:String,
  email:String
})


var myinfomodel = mongoose.model('myitems',myinfoschema);


app.post("/",(req,res)=>{
     
    nam = req.body.name;
    ema=req.body.email;
     
    var info_item = new myinfomodel({name:nam,email:ema});
    info_item.save()
    console.log(req.body)
    const params = {'message':"this form is submitted"}
    res.status(200).render('index.pug',params);
})











/*
kittyitem1.save(function(err,item1){
  if(err) return console.log(err)
});

*/

