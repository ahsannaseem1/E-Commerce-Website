const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Use the MongoDB URL from the environment variable
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
    .then(() => { console.log("MongoDB Connected") })
    .catch((err) => { console.log(err) });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Authorization', 'Content-Type', 'Cache-Control', 'Expires', 'Pragma'],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
