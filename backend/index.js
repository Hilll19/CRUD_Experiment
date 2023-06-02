import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// to be able recive file json, add express
app.use(express.json());

// add port and set console log message
app.listen(5000, ()=> console.log('Server up and running'));