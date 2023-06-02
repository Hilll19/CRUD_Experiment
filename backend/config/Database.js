import { Sequelize } from "sequelize";

const db = new Sequelize('crudlearn_db', 'root', '',{
    host: 'localhost',
    dialect: "mysql",
});

export default db;