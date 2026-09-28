"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonView = void 0;
/**
 * Camada View — exclusivamente JSON.
 *
 * Centraliza o formato das respostas da API para manter
 * consistência entre todos os controllers.
 */
class JsonView {
    static success(res, data, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            data,
        });
    }
    static created(res, data) {
        return this.success(res, data, 201);
    }
    static error(res, message, statusCode = 400, details) {
        return res.status(statusCode).json({
            success: false,
            error: {
                message,
                ...(details !== undefined ? { details } : {}),
            },
        });
    }
    static notFound(res, message = "Recurso não encontrado") {
        return this.error(res, message, 404);
    }
    static serverError(res, message = "Erro interno do servidor") {
        return this.error(res, message, 500);
    }
}
exports.JsonView = JsonView;
