"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = exports.UserGroup = exports.Role = exports.RolePermission = exports.RbacAuditLogs = exports.Permission = exports.GroupRole = exports.Group = exports.User = void 0;
/**
 * Índice das entidades (Model).
 * Importe aqui as classes que representam tabelas do banco.
 */
var User_1 = require("./entities/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var Group_1 = require("./entities/Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
var GroupRole_1 = require("./entities/GroupRole");
Object.defineProperty(exports, "GroupRole", { enumerable: true, get: function () { return GroupRole_1.GroupRole; } });
var Permission_1 = require("./entities/Permission");
Object.defineProperty(exports, "Permission", { enumerable: true, get: function () { return Permission_1.Permission; } });
var RbacAuditLogs_1 = require("./entities/RbacAuditLogs");
Object.defineProperty(exports, "RbacAuditLogs", { enumerable: true, get: function () { return RbacAuditLogs_1.RbacAuditLogs; } });
var RolePermission_1 = require("./entities/RolePermission");
Object.defineProperty(exports, "RolePermission", { enumerable: true, get: function () { return RolePermission_1.RolePermission; } });
var Roles_1 = require("./entities/Roles"); // Classe é "Role", arquivo é "Roles.ts"
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Roles_1.Role; } });
var UserGroup_1 = require("./entities/UserGroup");
Object.defineProperty(exports, "UserGroup", { enumerable: true, get: function () { return UserGroup_1.UserGroup; } });
var UserRoles_1 = require("./entities/UserRoles");
Object.defineProperty(exports, "UserRoles", { enumerable: true, get: function () { return UserRoles_1.UserRoles; } });
