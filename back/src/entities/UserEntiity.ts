
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Credential from './CredentialEntity';
import Turnos from "./TurnosEntitiy";



@Entity({
    name: "users"
})
export default class Usuario{
@PrimaryGeneratedColumn()
idUser: number

@Column()
nombre: string

@Column()
email: string

@Column()
birthdate: Date

@Column()
nDni: string

@OneToOne(() => Credential)
@JoinColumn()
credentials: Credential;

@OneToMany(() => Turnos, turnos => turnos.usuario)
turnos: Turnos[];
}
