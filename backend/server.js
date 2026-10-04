import { app } from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './src/db/db.js';


const PORT = 8000 || process.env.PORT;

connectDB();


app.listen(PORT, ()=>{

    console.log(`Server is running on port:${PORT}`);
    
});