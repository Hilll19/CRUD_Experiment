//UserModel this Structure table where data save in data base//
import { Sequelize } from "sequelize";
import db from "../config/Database.js"; //Import databse from file config


const {DataTypes} = Sequelize; //DataTypes this function from sequelize

//This structure for table parameter 1 name tables, parameter 2 file, parameter 3 have option
const User = db.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName:true
});

export default User;

//Create function to generate table, if tables Users not in database
(async()=> {
    // This function will running when call file UserModel.js
    await db.sync();
})();