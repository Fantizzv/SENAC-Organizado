"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Roles_1 = require("./Roles");
let UserRoles = class UserRoles {
    user_id;
    role_id;
    granted_at;
    granted_by;
    // Relacionamentos
    user;
    role;
};
exports.UserRoles = UserRoles;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], UserRoles.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], UserRoles.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "granted_at" }),
    __metadata("design:type", Date)
], UserRoles.prototype, "granted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", nullable: true }),
    __metadata("design:type", Object)
], UserRoles.prototype, "granted_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.userRoles, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], UserRoles.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Role, (role) => role.userRoles, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "role_id" }),
    __metadata("design:type", Roles_1.Role)
], UserRoles.prototype, "role", void 0);
exports.UserRoles = UserRoles = __decorate([
    (0, typeorm_1.Entity)("user_roles")
], UserRoles);
