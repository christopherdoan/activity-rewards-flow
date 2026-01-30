"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const auth_routes_1 = require("./routes/auth.routes");
const api_routes_1 = require("./routes/api.routes");
const passport_2 = require("./config/passport");
const env_1 = require("./config/env");
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: env_1.config.frontendUrl,
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
// Setup Passport Strategy
(0, passport_2.setupPassport)();
// Routes
app.use('/auth', auth_routes_1.authRoutes);
app.use('/api', api_routes_1.apiRoutes);
// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
const PORT = env_1.config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
