//This file ti handle all routing file
import express from "express";
import {
    getUsers, 
    getUserById
} from "../controller/UserController.js";

const router = express.Router();

router.get('/Users', getUsers); //New endpoint
router.get('/Users/:id', getUserById); //To get id add parameter :id

export default router;