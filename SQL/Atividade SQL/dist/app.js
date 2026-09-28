"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const JsonView_1 = require("./views/JsonView");
/**
 * Configuração da aplicação Express (API JSON).
 */
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    // Garante Content-Type JSON nas respostas
    app.use((_req, res, next) => {
        res.type("application/json");
        next();
    });
    app.use("/api", routes_1.default);
    app.use((_req, res) => {
        JsonView_1.JsonView.notFound(res, "Rota não encontrada");
    });
    app.use((err, _req, res, _next) => {
        console.error("[Erro]", err.message);
        JsonView_1.JsonView.serverError(res, err.message || "Erro interno do servidor");
    });
    return app;
}
