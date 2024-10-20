"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const users_route_1 = require("../modules/Admin/User/users.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/api",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/api/user",
        route: users_route_1.UsersRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
