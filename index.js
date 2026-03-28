const express = require('express');
//nimport express from "express"
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
//app.use(cors());
//app.use(express.json());

// Connect to your MongoDB
/*mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🚀 Connection Success: Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ Connection Error:", err));
*/
app.get('/', (req, res) => {
    res.send("Backend is live!");
});
const PORT = process.env.PORT || 5000;
app.get('/twitter',(req, res) => {res.send("Tweet is live!");})
app.get('/login',(req, res)=>{res.send('<h1>Login</h1>')})




//Server is starting
app.listen(process.env.PORT, () => console.log(`📡 Server listening on port ${PORT}`));
