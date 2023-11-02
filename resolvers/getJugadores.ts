import { Request, Response } from "npm:express@4.18.2";
import JugadorModel from "../db/jugador.ts";

const getJugadores = async (req: Request, res: Response) => {
    try {
      const jugador = await JugadorModel.findOne().exec();
      res.status(200).send({
          name:jugador.name,
          edad:jugador.edad,
          posicion:jugador.posicion,
          id:jugador._id.toString(),
  
      });
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };
  
  export default getJugadores;