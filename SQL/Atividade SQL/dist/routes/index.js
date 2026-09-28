"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_routes_1 = __importDefault(require("./usuario.routes"));
const routes = (0, express_1.Router)();
routes.get("/health", (_req, res) => {
    res.json({
        success: true,
        data: {
            status: "ok",
            message: "API senac-orm em execução",
        },
    });
});
routes.use("/usuarios", usuario_routes_1.default);
exports.default = routes;
