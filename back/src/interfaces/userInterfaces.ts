import Credential from "../entities/CredentialEntity";
import Turnos from "../entities/TurnosEntitiy"

interface IUsuario {
    idUser: number,
    nombre: string,
    email: string,
    birthdate: Date,
    nDni: string,
    credentialsId: number,
    turnos: Turnos[]
}

export default IUsuario;