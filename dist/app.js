"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const Teacher_1 = __importDefault(require("./routers/Teacher"));
//Settings
app.set('port', process.env.PORT);
//middleware
app.use(express_1.default.json());
const apiVersion = 'api-v1';
//Routes
app.use(`/${apiVersion}/teacher`, Teacher_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map