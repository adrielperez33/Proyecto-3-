const turnos = () =>{
    return(
        [
        {
            IdTurnos: 1,
            fecha:  new Date(2024, 5, 5),
            time: "10:00",
            status: true,
            usuarioId: 1
        },
        {
            IdTurnos: 2,
            fecha:  new Date(2024, 5, 1),
            time: "10:00",
            status: false,
            usuarioId: 1
        },
        {
            IdTurnos: 3,
            fecha:  new Date(2024, 6, 1),
            time: "12:00",
            status: true,
            usuarioId: 1
        }
        ]
    )
}

export default turnos