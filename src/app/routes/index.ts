import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UsersRoutes } from "../modules/Admin/User/users.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/api",
    route: AuthRoutes,
  },
 
  {
    path: "/api/user",
    route: UsersRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
