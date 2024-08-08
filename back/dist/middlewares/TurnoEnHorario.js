"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateTimeMiddleware = (req, res, next) => {
    const { time } = req.body;
    if (!time) {
        return res.status(400).json({ error: "Falta el atributo 'time'" });
    }
    const [hours, minutes] = time.split(':').map(Number);
    if (hours < 8 || hours > 18 || (hours === 18 && minutes > 0)) {
        return res.status(400).json({ error: "'el horario' debe estar entre las 08:00 y las 18:00" });
    }
    next();
};
exports.default = validateTimeMiddleware;
