export interface Cuarto {

    id?: number,
    createdAt?: number,
    updatedAt?: number,
    tipoDeCuarto: number,
    idPiso: {
        createdAt?: number,
        updatedAt?: number,
        id?: number,
        nivel: number,
        idCasa: number
    },
    ventanas: number

}