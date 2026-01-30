import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export const authRoutes = Router();

// Auth routes stub
// Implement your own auth strategy here

authRoutes.get('/me', (req, res) => {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json({ error: 'Not authenticated' });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        return res.json({ user: decoded });
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
});

authRoutes.post('/logout', (req, res) => {
    res.clearCookie('auth_token');
    res.json({ message: 'Logged out' });
});
