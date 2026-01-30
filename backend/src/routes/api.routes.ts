import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export const apiRoutes = Router();

// Middleware to check JWT
const isAuthenticated = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

apiRoutes.get('/stats', isAuthenticated, async (req: any, res) => {
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
