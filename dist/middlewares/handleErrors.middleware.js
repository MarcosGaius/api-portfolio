"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const handleErrorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    console.log("Internal Server Error", err);
    return res.status(500).json({ message: "Internal Server Error." });
};
exports.handleErrorMiddleware = handleErrorMiddleware;
