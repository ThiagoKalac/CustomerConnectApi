import { DataSource } from "typeorm"
import "dotenv/config"
import { Client } from "./entities/client.entity"
import { Contact } from "./entities/contact.entity"
import { createTable1679426457424 as CreateTable } from "./migrations/1679426457424-createTable"
import {
    alterColumnTellPhoneAndEmailsExtra1679445520370 as alterColumnTellPhoneAndEmailsExtra
} from "./migrations/1679445520370-alterColumnTellPhoneAndEmailsExtra"

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
        migrations: [CreateTable, alterColumnTellPhoneAndEmailsExtra]
    }
)

export default AppDataSource
