import mongoose from "npm:mongoose@7.6.3";
import { Equipo } from "../type.ts";

const Schema = mongoose.Schema;

export const EquipoSchema= new Schema(
    {
        name:{type:String, required:true},
        jugadores:{type:[mongoose.Schema.Types.ObjectID], ref:"Jugador", required:true},
    },{
        timestaps:false
    }
) ;

export type EquipoModelType= mongoose.Document & Omit<Equipo, "id">;
export default mongoose.model<EquipoModelType>("Equipo", EquipoSchema);