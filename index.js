const express = require('express')

const server = express()

server.get('/',(req,res)=> {
    const blog = { id: 1, title: "Blog title 1", description: "Blog description" } 
    res.send(blog)
})


const port = 5000
server.listen(port,()=> {
    console.log(`Server is running ${port}`)
})