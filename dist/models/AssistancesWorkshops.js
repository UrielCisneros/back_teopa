"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AssistencesWorkshopSchema = new mongoose_1.Schema({
    id_user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    id_workshop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'worshop'
    },
    id_teacher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    id_assistence: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "assistence"
    },
    assistence: Boolean
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('assistencesworkshop', AssistencesWorkshopSchema);
//# sourceMappingURL=AssistancesWorkshops.js.map