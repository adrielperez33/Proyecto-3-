import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./UserEntiity";

@Entity({
    name: "Turnos"
})
export default class Turnos{
@PrimaryGeneratedColumn()
IdTurnos: number

@Column()
fecha: Date

@Column()
time: string

@Column()
status: boolean

@ManyToOne(() => Usuario, (Usuario) => Usuario.turnos )
usuario: Usuario



}
