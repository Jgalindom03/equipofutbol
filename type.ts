export type Jugador={
    name:string,
    edad:number,
    posicion:string,
};

export type Equipo={
    name:string,
    jugadores:Jugador[];
}