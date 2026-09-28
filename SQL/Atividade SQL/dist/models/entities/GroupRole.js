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
exports.GroupRole = void 0;
const typeorm_1 = require("typeorm");
const Group_1 = require("./Group");
const Roles_1 = require("./Roles");
let GroupRole = class GroupRole {
    groupId;
    roleId;
    grantedAt;
    group;
    role;
};
exports.GroupRole = GroupRole;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "uuid", name: "group_id" }),
    __metadata("design:type", String)
], GroupRole.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "uuid", name: "role_id" }),
    __metadata("design:type", String)
], GroupRole.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "granted_at" }),
    __metadata("design:type", Date)
], GroupRole.prototype, "grantedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Group_1.Group, (group) => group.groupRoles, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "group_id" }),
    __metadata("design:type", Group_1.Group)
], GroupRole.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Role, (role) => role.groupRoles, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "role_id" }),
    __metadata("design:type", Roles_1.Role)
], GroupRole.prototype, "role", void 0);
exports.GroupRole = GroupRole = __decorate([
    (0, typeorm_1.Entity)("group_roles")
], GroupRole);
