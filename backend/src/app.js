import express from 'express';

const app = express();

app.use(express.json());


app.get('/api/healt', (req, res)=>{

    res.status(200).json({
        success:true,
        message:"Backend is runningg!!!"
    });

});

export {app};