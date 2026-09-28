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
exports.RbacAuditLogs = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const GroupRole_1 = require("./GroupRole");
const Permission_1 = require("./Permission");
let RbacAuditLogs = class RbacAuditLogs {
    id;
    userId;
    actionType;
    targetUserId;
    targetRoleId;
    targetPermissionId;
    ipAddress;
    createdAt;
    user;
    targetUser;
    targetRole;
    targetPermission;
};
exports.RbacAuditLogs = RbacAuditLogs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], RbacAuditLogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", name: "user_id", nullable: true }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "action_type", length: 50 }),
    __metadata("design:type", String)
], RbacAuditLogs.prototype, "actionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", name: "target_user_id", nullable: true }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", name: "target_role_id", nullable: true }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetRoleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", name: "target_permission_id", nullable: true }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetPermissionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "ip_address", length: 45, nullable: true }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], RbacAuditLogs.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.auditLogs, {
        onDelete: "SET NULL",
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, { onDelete: "SET NULL", nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "target_user_id" }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GroupRole_1.GroupRole, { onDelete: "SET NULL", nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "target_role_id" }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetRole", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permission_1.Permission, { onDelete: "SET NULL", nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "target_permission_id" }),
    __metadata("design:type", Object)
], RbacAuditLogs.prototype, "targetPermission", void 0);
exports.RbacAuditLogs = RbacAuditLogs = __decorate([
    (0, typeorm_1.Entity)("rbac_audit_logs")
], RbacAuditLogs);
