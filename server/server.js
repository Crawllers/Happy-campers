const express = require ('express');
const app =express();
const port=5000;
const mongoose = require('mongoose')
const User = require('./schema/schema.js');
const Events = require('./schema/schemaEvent.js');
const Posts = require('./schema/schemaPost.js');
mongoose.connect('mongodb://localhost:27017/happy-camper', { useNewUrlParser: true,useUnifiedTopology: true });///to connect mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoDB connected')
});


//serving static files and parssing data
app.use(express.static('public'))
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

/******************************* Login signUp ************************************/
//this is the signUp call
app.post('/sign',(req,res)=>{ 
var username=req.body.username;
var email=req.body.email
var password=req.body.password;
User.create({ // create user 
    username: username,
    email: email,
    password: password,
    isadmin: false
});
})


// this is the login call
app.post('/login', async (req, res) => {
    let compare='';
    await User.findOne({email: req.body.email}, (err, data) =>{
        if(data){
            compare = JSON.parse(JSON.stringify(data));
            console.log('data',data);
        }
    })
    if(req.body.email === compare.email && req.body.pass === compare.password){
        res.send({status: "successLogg", useremail: compare.email, username: compare.username});
    } else{
        console.log('mistake');
    }
})


/************************** get posts and events data ****************************/
//get all posts data from

app.get('/postsdb', (req, res)=>{
    Posts.find((err, data)=>{
        if(err) {
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
});


//get all events from
app.get('/eventsdb', (req, res)=>{
    Events.find((err, data)=>{
        if(err) {
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
});


/********************************* post related data *********************************/
//this is the create-post call
app.post('/createpost',(req,res)=>{
    var username=req.body.username;
    var emailusername=req.body.emailusername;
    var image=req.body.image;
    var textDsc=req.body.textDsc
    Posts.create({
        username:username,  
        useremail:emailusername,
        imgUrl: image,
        text: textDsc,
        date:Date.now()
    }) 
})


//delete your own posts by accecing My Posts tab in web
app.post('/deletepostdb', (req,res)=>{
    Posts.deleteOne({_id: req.body.id}, err=> {
        if(err) return handleError(err);
    })
})


//update your own posts by accecing My Posts tab in web
app.post('/updatepostdb', (req,res)=>{
    Posts.updateOne({_id : req.body.id}, {text: req.body.change}, err=>{
        if(!err) console.log('change done!');
    })
})


/********************************* Events related data *********************************/
//this is post create events call
app.post('/createeventdb', (req, res) =>{
    var username = req.body.username
    var useremail = req.body.useremail
    var title=req.body.title
    var telephone=req.body.telnum
    var location=req.body.location
    var date=req.body.date
    var image=req.body.image
    var text =req.body.text
    Events.create({
        username: username,
        useremail: useremail,
        title: title,
        location: location,
        telephone: telephone,
        date: date,
        imgUrl: image,
        text: text
    })
})


//delete your own event by accecing My Posts tab in web
app.post('/deleteeventdb', (req, res)=>{
    Events.deleteOne({_id: req.body.id}, err=> {
        if(err) return handleError(err);
    })
})
/********************** join or leave an event *************************/

//join Events call
app.post('/joiningdb', (req,res)=>{
    Events.updateOne({_id : req.body.id}, {joinEvent: req.body.joined}, err=>{
        if(!err) console.log('change done!');
    })
})

//Drop Events call
app.post('/dropjoiningdb', (req,res)=>{
    Events.updateOne({_id : req.body.id}, {joinEvent: req.body.drop}, err=>{
        if(!err) console.log('change done!');
    })
})


app.listen(port,()=> console.log(`Server started on port ${port}`))