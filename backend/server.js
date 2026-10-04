import { app } from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();


const PORT = 8000 || process.env.PORT;


app.listen(PORT, ()=>{

    console.log(`Server is running on port:${PORT}`);
    
});