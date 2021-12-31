"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Auth_controller_1 = require("../controllers/Auth.controller");
router.post('/', Auth_controller_1.singIn);
router.get('/simulation/:idTeacher', Auth_controller_1.singInSimulation);
exports.default = router;
//# sourceMappingURL=Auth.js.map