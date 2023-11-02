import mongoose from "npm:mongoose@7.6.3";
import { Jugador } from "../type.ts";

const Schema = mongoose.Schema;

const JugadorSchema= new Schema(
    {
        name:{type:String, required:true},
        edad:{type:Number, required:true},
        posicion:{type:String, required:true},
    },{
        timestamps: false
    }
);

export type JugadorModelType= mongoose.Document & Omit<Jugador, "id">;
export default mongoose.model<JugadorModelType>("Jugador", JugadorSchema);