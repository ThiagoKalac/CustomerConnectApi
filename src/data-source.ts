import { DataSource } from "typeorm"
import "dotenv/config"
import { Client } from "./entities/client.entity"
import { Contact } from "./entities/contact.entity"
import { createTable1680187037375 as CreateTable} from "./migrations/1680187037375-createTable"

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
        migrations: [CreateTable]
    }
)

export default AppDataSource
