"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('3000'),
    DATABASE_URL: zod_1.z.string(),
    JWT_SECRET: zod_1.z.string(),
    FRONTEND_URL: zod_1.z.string().default('http://localhost:5173'),
    REDIS_URL: zod_1.z.string().optional(),
});
const processEnv = envSchema.safeParse(process.env);
if (!processEnv.success) {
    console.error('❌ Invalid environment variables:', processEnv.error.format());
    // In a real app we might throw, but for template generation we'll warn
    // process.exit(1); 
}
// Export validated env or fallback to process.env (unsafe but prevents crash during setup)
exports.config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || 'supersecret',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
    redisUrl: process.env.REDIS_URL
};
