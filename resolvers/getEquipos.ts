import { Request, Response } from "npm:express@4.18.2";
import  EquipoModel  from "../db/equipo.ts";



const getEquipos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipo = await EquipoModel.findById(id).populate('jugadores');
    if (!equipo) {
      res.status(404).send("Equipo not found");
      return;
    }
    res.status(200).send({
        name:equipo.name,
        jugadores:equipo.jugadores,
        id:equipo.id,
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getEquipos;