import { Schema, model, Document } from 'mongoose';

export interface IAssistence extends Document{
    fecha_asistencia: string;
    id_workshop: string;
    alumnos_total: number;
    dia: string;
}

const AssistencesSchema = new Schema({
    fecha_asistencia: String,
    id_workshop: {
        type: Schema.Types.ObjectId,
        ref: 'worshop'
    },
    alumnos_total: Number,
    dia: String
},{
    timestamps: true
});


export default model<IAssistence>('assistence', AssistencesSchema);