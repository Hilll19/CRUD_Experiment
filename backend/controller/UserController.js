import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//To get single data 
export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            //To get id from params
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//For createUser
export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

//For update user, metode use id req params
export const updateUser = async(req, res) =>{
    try {
        const response = await User.update(req.body,{
            //To get id from params
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User updated"});
    } catch (error) {
        console.log(error.message);
    }
}

//For delete User
export const deleteUser = async(req, res) =>{
    try {
        const response = await User.destroy({
            //To get id from params
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User deleted"});
    } catch (error) {
        console.log(error.message);
    }
}