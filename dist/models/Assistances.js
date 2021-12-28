"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AssistencesSchema = new mongoose_1.Schema({
    fecha_asistencia: String,
    id_workshop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'worshop'
    },
    alumnos_total: Number,
    dia: String
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('assistence', AssistencesSchema);
//# sourceMappingURL=Assistances.js.map