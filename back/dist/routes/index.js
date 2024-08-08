"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("./users"));
const apoiments_1 = __importDefault(require("./apoiments"));
const apoiment_1 = __importDefault(require("./apoiment"));
const router = (0, express_1.Router)();
router.use("/users", users_1.default);
router.use("/appointments", apoiments_1.default);
router.use("/appointment", apoiment_1.default);
exports.default = router;
