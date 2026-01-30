"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
exports.authRoutes = (0, express_1.Router)();
// Auth routes stub
// Implement your own auth strategy here
exports.authRoutes.get('/me', (req, res) => {
    const token = req.cookies.auth_token;
    if (!token)
        return res.status(401).json({ error: 'Not authenticated' });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.config.jwtSecret);
        return res.json({ user: decoded });
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
});
exports.authRoutes.post('/logout', (req, res) => {
    res.clearCookie('auth_token');
    res.json({ message: 'Logged out' });
});
