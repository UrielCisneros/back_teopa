"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Teacher_controller_1 = require("../controllers/Teacher.controller");
router.post('/', Teacher_controller_1.createTeacher);
router.get('/', Teacher_controller_1.getTeachers);
exports.default = router;
//# sourceMappingURL=Teacher.js.map