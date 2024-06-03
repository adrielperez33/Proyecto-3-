import server from "./server"
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
.then( res =>{
    console.log("conexión con base de datos exitosa");
    
    server.listen(PORT, () =>{
        console.log(`El servidor esta escuchando en el puerto ${PORT}`);
        
    })
}
)










































// const num1: number = 5

// const sumar = (num1: number): boolean =>{
//     if (num1 === 5) {
//         return true
//     } else{
//         return false
//     }
// }
// console.log(sumar(num1));

// const num2: number = 10

// function multiplicacion(num1: number, num2: number): number {
//     return num1 * num2
// }

// console.log(`voy a multuplicar${num1} y ${num2}. El resultado es:`, multiplicacion(num1, num2));

// interface IUser{
// nombre: string,
// apellido: string,
// estadoCivil: string
// }

// const usuario1: IUser = {
//     nombre: "OSBALDO",
//     apellido: "RAMIREZ",
//     estadoCivil: "DIVORCIADO"
// }

// console.log(usuario1);
