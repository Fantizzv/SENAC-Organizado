"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const database_1 = require("../config/database");
const User_1 = require("../models/entities/User");
const BaseController_1 = require("./BaseController");
/**
 * Controller de exemplo para a entidade Usuario.
 * Demonstra o CRUD básico usando o repositório do TypeORM.
 */
class UsuarioController extends BaseController_1.BaseController {
    get repository() {
        return database_1.AppDataSource.getRepository(User_1.User);
    }
    listar = this.handle(async (_req, res) => {
        const usuarios = await this.repository.find({
            order: { id: "ASC" },
        });
        this.ok(res, usuarios);
    });
    buscarPorId = this.handle(async (req, res) => {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            this.badRequest(res, "ID inválido");
            return;
        }
        const usuario = await this.repository.findOneBy({ id });
        if (!usuario) {
            this.notFound(res, `Usuário ${id} não encontrado`);
            return;
        }
        this.ok(res, usuario);
    });
    criar = this.handle(async (req, res) => {
        const { username, email, isActive } = req.body;
        if (!username || !email) {
            this.badRequest(res, "Campos obrigatórios: username, email");
            return;
        }
        const usuario = this.repository.create({
            username,
            email,
            isActive: isActive ?? true,
        });
        const salvo = await this.repository.save(usuario);
        this.created(res, salvo);
    });
    atualizar = this.handle(async (req, res) => {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            this.badRequest(res, "ID inválido");
            return;
        }
        const usuario = await this.repository.findOneBy({ id });
        if (!usuario) {
            this.notFound(res, `Usuário ${id} não encontrado`);
            return;
        }
        const { username, email, isActive } = req.body;
        if (username !== undefined)
            usuario.username = username;
        if (email !== undefined)
            usuario.email = email;
        if (isActive !== undefined)
            usuario.isActive = isActive;
        const atualizado = await this.repository.save(usuario);
        this.ok(res, atualizado);
    });
    remover = this.handle(async (req, res) => {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            this.badRequest(res, "ID inválido");
            return;
        }
        const usuario = await this.repository.findOneBy({ id });
        if (!usuario) {
            this.notFound(res, `Usuário ${id} não encontrado`);
            return;
        }
        await this.repository.remove(usuario);
        this.ok(res, { message: `Usuário ${id} removido` });
    });
}
exports.UsuarioController = UsuarioController;
