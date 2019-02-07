export interface Piso {

    createdAt?: number,
    updatedAt?: number,
    id?: number,
    nivel: number,
    idCasa: {
        createdAt?: number,
        updatedAt?: number,
        id?: number,
        direccionCasa: string;
    }

}