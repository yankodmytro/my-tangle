"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = exports.loginSchema = exports.newsletterFormSchema = void 0;
const zod_1 = require("zod");
exports.newsletterFormSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters long'),
    email: zod_1.z.email('Enter a valid email address')
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.email('Enter a valid email address'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long')
});
exports.envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.url(),
    REDIS_URL: zod_1.z.url(),
    UPLOAD_DIR: zod_1.z.string().min(1),
    API_URL: zod_1.z.url(),
    PORT: zod_1.z.coerce.number().default(3001),
    CORS_ORIGIN: zod_1.z.string().default('http://localhost:3000')
});
