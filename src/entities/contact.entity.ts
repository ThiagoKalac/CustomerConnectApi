import { Column, Entity, ManyToOne } from "typeorm"
import { People } from "./base/people.entity";
import { Client } from "./client.entity";

@Entity('contact')
class Contact extends People{
     @Column({ length: 100, unique: false })
     nickname: string;

     @Column({length: 100 , unique: false})
     email: string;

     @ManyToOne(() => Client, (client) => client.contact, {cascade:true})
     client: Client;
}

export {Contact}