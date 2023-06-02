//UserModel this Structure table where data save in data base//
import { Sequelize } from "sequelize";
import db from "../config/Database.js"; //Import databse from file config


const {DataTypes} = Sequelize; //DataTypes this function from sequelize
const User = db.define('Users', {
    name : DataTypes.STRING,
    name : DataTypes.STRING,
    name : DataTypes.STRING,
}, {
    freezeTableName:true
})