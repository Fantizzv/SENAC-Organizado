"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controllers/UsuarioController");
const router = (0, express_1.Router)();
const controller = new UsuarioController_1.UsuarioController();
/**
 * Rotas REST do recurso Usuário.
 * GET    /usuarios      → listar
 * GET    /usuarios/:id  → buscar por id
 * POST   /usuarios      → criar
 * PUT    /usuarios/:id  → atualizar
 * DELETE /usuarios/:id  → remover
 */
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.remover);
exports.default = router;
