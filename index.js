const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("You called? :D")
})

app.get('/api/tasks', (req, res) => {

})
app.post('/api/tasks', (req, res) => {
    res.send(req.body)
})

mongoose.connect("mongodb+srv://cwinata042:2kuK7EvkKxQLg8ZI@cluster0.pqfumam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to database!")

    app.listen(3000, () => {
        console.log("Server is running on port 3000...")
    })
})
.catch(() => {
    console.log("Connection to database failed!")
})