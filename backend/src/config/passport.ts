import passport from 'passport';

import { PrismaClient } from '@prisma/client';
import { config } from './env';

const prisma = new PrismaClient();

export const setupPassport = () => {
    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id: number, done) => {
        try {
            const user = await prisma.user.findUnique({ where: { id } });
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};
