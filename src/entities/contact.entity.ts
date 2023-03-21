import { Entity, ManyToOne } from "typeorm"
import { People } from "./base/people.entity";
import { Client } from "./client.entity";

@Entity('contact')
class Contact extends People{
     @ManyToOne(() => Client, (client) => client.contact)
     client: Client;
}

export {Contact}