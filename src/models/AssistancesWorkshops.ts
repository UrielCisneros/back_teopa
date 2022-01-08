import { Schema, model, Document } from 'mongoose';

export interface IAssistencesWorkshops extends Document{
    id_user: string;
    id_workshop: string;
    id_teacher: string;
    assistence: boolean;
}

const AssistencesWorkshopSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    id_workshop: {
        type: Schema.Types.ObjectId,
        ref: 'worshop'
    },
    id_teacher: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    id_assistence: {
        type: Schema.Types.ObjectId,
        ref: "assistence"
    },
    assistence: Boolean
},{
    timestamps: true
});


export default model<IAssistencesWorkshops>('assistencesworkshop', AssistencesWorkshopSchema);