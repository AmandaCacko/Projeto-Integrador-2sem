import { Sequelize } from "sequelize" //npm install sequelize splite3 no terminal para funcionar

const db = new Sequelize (
    "database",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: './db.sqlite'
    }
)

export default db