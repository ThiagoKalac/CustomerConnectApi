import { DataSource } from "typeorm"
import "dotenv/config"
import { Client } from "./entities/client.entity"
import { Contact } from "./entities/contact.entity"
import { createTable1679593628393 as CreateTable } from "./migrations/1679593628393-createTable"
import {alterColumnNicknameAndEmail1679679080049 as alterColumnNicknameAndEmail } from "./migrations/1679679080049-alterColumnNicknameAndEmail"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [Client,Contact],
        migrations: [CreateTable, alterColumnNicknameAndEmail]
    }
)

export default AppDataSource
