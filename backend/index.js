import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js" 

const app = express();
app.use(cors());
app.use(express.json()); //To be able recive file json, add express
app.use(UserRoute); //For call file route
app.listen(5000, ()=> console.log('Server up and running')); // add port and set console log message