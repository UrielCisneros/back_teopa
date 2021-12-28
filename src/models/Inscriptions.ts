import { Schema, model, Document } from 'mongoose';

export interface IInscription extends Document {
    id_user: string;
    id_workshop: string;
}

const Inscriptions = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    id_workshop: {
        type: Schema.Types.ObjectId,
        ref: "workshop"
    }
},{
    timestamps: true
});

export default model("inscription",Inscriptions);