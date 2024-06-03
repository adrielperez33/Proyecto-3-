
import Turnos from "../entities/TurnosEntitiy";

interface UserDto {
    username : string;
    password: string;
    nombre: string;
    email: string;
    birthdate: Date;
    nDni: string;
    credentialsId: number;
    turnos?: Turnos[];
}

export default UserDto;