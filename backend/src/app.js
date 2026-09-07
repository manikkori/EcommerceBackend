const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    console.log(`Ecommerce API is Running!`);
    
})

module.exports = app;