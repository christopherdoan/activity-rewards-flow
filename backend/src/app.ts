import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { authRoutes } from './routes/auth.routes';
import { apiRoutes } from './routes/api.routes';
import { setupPassport } from './config/passport';
import { config } from './config/env';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
    origin: config.frontendUrl,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Setup Passport Strategy
setupPassport();

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = config.port || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
