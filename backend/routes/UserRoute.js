//This file ti handle all routing file
import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const router = express.Router();

router.get('/Users', getUsers); //New endpoint
router.get('/Users/:id', getUserById); //To get id add parameter :id
router.post('/Users/', createUser); //This router to created user
router.patch('/Users/:id', updateUser); //This update user by user id with router patch
router.delete('/Users/:id', deleteUser); //This to deleted user 


export default router;