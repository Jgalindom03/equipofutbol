import { Request, Response } from "npm:express@4.18.2";
import JugadorModel from "../db/jugador.ts";

const addJugador= async(req:Request, res:Response)=>{

    try{
        const{name,edad, posicion}= req.body;
        if(!name || !edad || !posicion){
            res.status(400).send("name, edad y posicion are required");
            return;
        }

        const siexiste= await JugadorModel.findOne({name}).exec();
        if(siexiste){
            res.status(400).send("el jugador existe");
            return;
        }

        const newJugador= new JugadorModel({name, edad, posicion});
        await newJugador.save();
        
        res.status(200).send({
            name: newJugador.name,
            edad:newJugador.edad,
            posicion:newJugador.posicion,
            id:newJugador._id,
        });
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};

export default addJugador;