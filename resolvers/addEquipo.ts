import { Request, Response } from "npm:express@4.18.2";
import  EquipoModel  from "../db/equipo.ts";
import  JugadorModel  from "../db/jugador.ts";
import jugador from "../db/jugador.ts";

const addEquipo= async(req:Request, res:Response)=>{
try{
    const{ name, jugadores}= req.body;
    if (!name || !jugadores) {
        res.status(400).send("Name and jugador are required");
        return;
      }

      const newEquipo = new EquipoModel({name, jugadores });
      await newEquipo.save();
  res.status(200).send({
    name:newEquipo.name,
    jugadores:newEquipo.jugadores,
    id:newEquipo.id,
  });
}catch(error){
    res.status(500).send(error.message);
    return;
}
}

export default addEquipo;