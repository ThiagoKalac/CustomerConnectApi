import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('people')
class People{
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column({length: 100 , unique: true})
     nickname: string;

     @Column({length: 200})
     fullName: string;

     @Column({length: 11})
     telephone: string;

     @Column("simple-array")
     telephonesExtra: string[];

     @Column({length: 100 , unique: true})
     email: string;

     @Column("simple-array")
     emailsExtra: string[];

     @CreateDateColumn()
     createdAt: Date;
}

export {People}