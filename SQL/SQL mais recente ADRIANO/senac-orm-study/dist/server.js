"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const database_1 = require("./config/database");
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 3000;
async function bootstrap() {
    try {
        await (0, database_1.connectDatabase)();
        const app = (0, app_1.createApp)();
        app.listen(PORT, () => {
            console.log(`[Server] API rodando em http://localhost:${PORT}`);
            console.log(`[Server] Health check: http://localhost:${PORT}/api/health`);
            console.log(`[Server] Usuários: http://localhost:${PORT}/api/usuarios`);
        });
    }
    catch (error) {
        console.error("[Server] Falha ao iniciar a aplicação:", error);
        process.exit(1);
    }
}
bootstrap();
