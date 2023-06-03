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