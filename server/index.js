import express from 'express';


import Connection from './databse/db.js';


const app = express();


const PORT = 8000;

app.listen(PORT, ()=> console.log(`server is running successfully on PORT ${PORT}`));

Connection();