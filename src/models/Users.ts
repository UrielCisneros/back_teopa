import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    nombre: string;
    domicilio: string;
    telefono: string;
    correo: string;
    fecha_nacimiento: string;
    fecha_de_ingreso: string;
    grado_estudio: string;
    password: string;
    admin: boolean;
    rol: string;
    edad: string;
    escuela_donde_estudia: string;
    grado: string;
    nombre_tutor: string;
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}
const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    domicilio: String,
    telefono: String,
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    fecha_nacimiento: String,
    fecha_de_ingreso: String,
    grado_estudio: String,
    password: String,
    admin: Boolean,
    rol: String,
    edad: String,
    //Datos alumno
    escuela_donde_estudia: String,
    grado: String,
    nombre_tutor: String
},{
    timestamps: true
});

UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
}

UserSchema.methods.validatePassword = async function (password:string): Promise<boolean> {
    return await bcrypt.compare(password,this.password);
}

export default model<IUser>("user",UserSchema);