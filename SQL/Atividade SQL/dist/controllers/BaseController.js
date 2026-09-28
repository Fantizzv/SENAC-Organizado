"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const JsonView_1 = require("../views/JsonView");
/**
 * Camada Controller — classe base.
 *
 * Controllers concretos herdam desta classe e implementam
 * as ações (listar, buscar, criar, atualizar, remover).
 * A View JSON é usada para padronizar as respostas.
 */
class BaseController {
    /**
     * Envolve handlers async e encaminha erros para o middleware global.
     */
    handle(fn) {
        return async (req, res, next) => {
            try {
                await fn(req, res, next);
            }
            catch (error) {
                next(error);
            }
        };
    }
    ok(res, data) {
        return JsonView_1.JsonView.success(res, data);
    }
    created(res, data) {
        return JsonView_1.JsonView.created(res, data);
    }
    notFound(res, message) {
        return JsonView_1.JsonView.notFound(res, message);
    }
    badRequest(res, message, details) {
        return JsonView_1.JsonView.error(res, message, 400, details);
    }
}
exports.BaseController = BaseController;
