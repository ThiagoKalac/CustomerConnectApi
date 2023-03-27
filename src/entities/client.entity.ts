import { Column, Entity, OneToMany, BeforeUpdate, BeforeInsert } from "typeorm"
import { Contact } from "./contact.entity";
import { hashSync } from "bcryptjs";
import { People } from "./base/people.entity";

@Entity('client')
class Client extends People{
     @Column({ length: 100, unique: true })
     nickname: string;

     @Column({length: 100 , unique: true})
     email: string;

     @Column({ length: 120 })
     password: string;

     @BeforeUpdate()
     @BeforeInsert()
     hashPassword() {
     this.password = hashSync(this.password, 10);
     }

     @OneToMany(() => Contact, (contact) => contact.client)
     contact: Contact[];
}

export {Client}
