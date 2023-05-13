const express = require('express')
const ejs = require('ejs')
const server = express()

server.set("view engine","ejs")
/* server.get('/',(req,res)=> {
    const blog = { id: 1, title: "Blog title 1", description: "Blog description" } 
    res.send(blog)
}) */

server.use(express.static('public'));


//ROUTES

server.get('/',(req,res)=> {
    res.render('index')
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


const port = 5000
server.listen(port,()=> {
    console.log(`Server is running ${port}`)
})