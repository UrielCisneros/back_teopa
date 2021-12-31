import { Schema, model, Document }  from 'mongoose';

export interface IWorkShop extends Document {
    nombre: string;
    fecha_inicio: string;
    fecha_final: string;
    horario: string;
    id_user: string;
}

const Workshop = new Schema({
    nombre: String,
    fecha_inicio: String,
    fecha_final: String,
    horario: String,
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},{
    timestamps: true
})

export default model<IWorkShop>("workshop", Workshop);