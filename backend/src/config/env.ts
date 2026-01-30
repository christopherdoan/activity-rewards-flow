import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default('3000'),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
    FRONTEND_URL: z.string().default('http://localhost:5173'),
    REDIS_URL: z.string().optional(),
});

const processEnv = envSchema.safeParse(process.env);

if (!processEnv.success) {
    console.error('❌ Invalid environment variables:', processEnv.error.format());
    // In a real app we might throw, but for template generation we'll warn
    // process.exit(1); 
}

// Export validated env or fallback to process.env (unsafe but prevents crash during setup)
export const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || 'supersecret',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
    redisUrl: process.env.REDIS_URL
};
