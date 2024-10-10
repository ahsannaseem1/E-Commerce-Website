const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mongoURL = 'mongodb+srv://ahsannaseem974:9WsLYV4Wg6D9DxLv@store.vtopn.mongodb.net/'
mongoose.connect(mongoURL)
    .then(() => { console.log("MongoDB Connected") })
    .catch((err) => { console.log(err) });

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Authorization', 'Content-Type', 'Cache-Control', 'Expires', 'Pragma'],
        credentials: true
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} `))