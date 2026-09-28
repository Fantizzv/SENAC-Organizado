"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.connectDatabase = connectDatabase;
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
/**
 * Camada Model — Abstração da conexão com o banco de dados.
 *
 * O desenvolvedor precisa informar apenas as variáveis no arquivo .env
 * (veja .env.example). Toda a configuração do TypeORM fica centralizada aqui.
 */
function buildDataSourceOptions() {
    const type = (process.env.DB_TYPE || "mysql");
    const entities = [path_1.default.join(__dirname, "../models/entities/**/*.{ts,js}")];
    const common = {
        entities,
        synchronize: process.env.DB_SYNC === "true",
        logging: process.env.DB_LOGGING === "true",
    };
    if (type === "sqlite") {
        return {
            type: "sqlite",
            database: process.env.DB_NAME || "database.sqlite",
            ...common,
        };
    }
    return {
        type,
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || (type === "postgres" ? 5432 : 3306),
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "senac_orm",
        ...common,
    };
}
exports.AppDataSource = new typeorm_1.DataSource(buildDataSourceOptions());
/**
 * Inicializa a conexão com o banco.
 * Chame uma vez na subida da aplicação (server.ts).
 */
async function connectDatabase() {
    if (exports.AppDataSource.isInitialized) {
        return exports.AppDataSource;
    }
    await exports.AppDataSource.initialize();
    console.log(`[Model] Conectado ao banco (${process.env.DB_TYPE || "mysql"})`);
    return exports.AppDataSource;
}
