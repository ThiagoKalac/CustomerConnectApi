import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('people')
class People{
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column({length: 100})
     nickname: string;

     @Column({length: 200})
     fullName: string;

     @Column({length: 11})
     telephone: string;

     @Column("simple-array",{nullable:true})
     telephonesExtra: string[];

     @Column({length: 100})
     email: string;

     @Column("simple-array",{nullable:true})
     emailsExtra: string[];

     @CreateDateColumn()
     createdAt: Date;
}

export {People}