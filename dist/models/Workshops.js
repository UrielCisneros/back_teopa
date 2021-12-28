"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Workshop = new mongoose_1.Schema({
    nombre: String,
    fecha_inicio: String,
    fecha_final: String,
    horario: String,
    id_user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("workshop", Workshop);
//# sourceMappingURL=Workshops.js.map