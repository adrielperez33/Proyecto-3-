import Usuario from './../entities/UserEntiity';

interface Iturno{
    IdTurnos: number,
    fecha: Date,
    time: string,
    status: boolean,
    usuario: Usuario
}


export default Iturno
