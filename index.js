const express = require('express')
const ejs = require('ejs')
const server = express()
const mongoose = require('mongoose');
const Post = require('./models/Post')

server.set("view engine","ejs")
/* server.get('/',(req,res)=> {
    const blog = { id: 1, title: "Blog title 1", description: "Blog description" } 
    res.send(blog)
}) */

server.use(express.static('public'));
server.use(express.urlencoded({extended:true}))
server.use(express.json())

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//ROUTES

server.get('/',async (req,res)=> {
    const posts = await Post.find({})
    res.render('index',{
      posts
    });
})
server.get('/post',(req,res)=> {
    res.render('post')
})
server.get('/about',(req,res)=> {
    res.render('about')
})
server.get('/add_post',(req,res)=> {
    res.render('add_post')
})

server.post('/posts',async (req,res)=> {
    await Post.create(req.body)
    res.redirect('/')
})


const port = 5000
server.listen(port,()=> {
    console.log(`Server is running ${port}`)
})