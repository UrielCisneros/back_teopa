"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Workshop_controller_1 = require("../controllers/Workshop.controller");
router.post('/', Workshop_controller_1.createWorkshop);
exports.default = router;
//# sourceMappingURL=Workshop.js.map