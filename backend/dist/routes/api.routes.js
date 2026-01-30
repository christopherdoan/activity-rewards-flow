"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
exports.apiRoutes = (0, express_1.Router)();
// Middleware to check JWT
const isAuthenticated = (req, res, next) => {
    const token = req.cookies.auth_token;
    if (!token)
        return res.status(401).json({ error: 'Unauthorized' });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.config.jwtSecret);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
exports.apiRoutes.get('/stats', isAuthenticated, async (req, res) => {
    // Placeholder for Stats logic
    // Here we would use the Caching layer (L1 Memory -> L2 DB -> API)
    res.json({
        message: "Protected stats data",
        user: req.user,
        data: {
            distance: 1234.56,
            elevation: 9876,
            count: 42
        }
    });
});
