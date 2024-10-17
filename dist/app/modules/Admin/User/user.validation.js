"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = exports.CreateUserValidation = void 0;
const zod_1 = require("zod");
exports.CreateUserValidation = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    image: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, { message: "Username is required" }),
    role: zod_1.z.enum(['User', 'Admin'], { message: "Invalid user role" }),
    address: zod_1.z.string().min(1, { message: "Address is required" }),
    phoneNumber: zod_1.z.string().min(10, { message: "Phone number must be at least 10 characters" }),
    password: zod_1.z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: zod_1.z.string().min(8, { message: "Confirm password must be at least 8 characters" }),
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This tells Zod where the error is
});
exports.UserValidation = {
    CreateUserValidation: exports.CreateUserValidation
};
