"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPassport = void 0;
const passport_1 = __importDefault(require("passport"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const setupPassport = () => {
    passport_1.default.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport_1.default.deserializeUser(async (id, done) => {
        try {
            const user = await prisma.user.findUnique({ where: { id } });
            done(null, user);
        }
        catch (error) {
            done(error);
        }
    });
};
exports.setupPassport = setupPassport;
