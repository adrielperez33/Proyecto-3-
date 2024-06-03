import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials"
})
export default class Credential{
@PrimaryGeneratedColumn()
idCredential: number

@Column()
username: string

@Column()
password: string

}
