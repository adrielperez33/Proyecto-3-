import Iturno from "./apoimentInterfaces"

interface IUsuario{
    Id: number,
    nombre: string,
    email: string,
    turno: Iturno
}


export default IUsuario
