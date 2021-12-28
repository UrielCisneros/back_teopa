"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Inscriptions = new mongoose_1.Schema({
    id_user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    id_workshop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "workshop"
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("inscription", Inscriptions);
//# sourceMappingURL=Inscriptions.js.map