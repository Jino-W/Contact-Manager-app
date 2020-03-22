const express = require('express')
const cors = require('cors');
const connectDB = require('./config/database')
const router = require('./config/routes')
const app = express()


const port = 3020

app.use(express.json())

connectDB() 

app.use(cors());

app.use('/', router);


app.listen(port, () => {
    console.log('listening on port', port)
})