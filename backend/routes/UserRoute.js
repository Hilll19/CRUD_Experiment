//This file ti handle all routing file
import express from "express";
import {getUsers} from "../controller/UserController.js";

const router = express.Router();

router.get('/Users', getUsers); //New endpoint


export default router;