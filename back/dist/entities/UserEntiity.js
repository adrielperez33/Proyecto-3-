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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CredentialEntity_1 = __importDefault(require("./CredentialEntity"));
const TurnosEntitiy_1 = __importDefault(require("./TurnosEntitiy"));
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Usuario.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nDni", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CredentialEntity_1.default),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CredentialEntity_1.default)
], Usuario.prototype, "credentials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TurnosEntitiy_1.default, turnos => turnos.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "turnos", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)({
        name: "users"
    })
], Usuario);
exports.default = Usuario;
