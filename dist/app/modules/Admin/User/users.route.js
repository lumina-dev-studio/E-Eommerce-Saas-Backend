"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const AuthConstant_1 = require("../../Auth/AuthConstant");
const zodValidation_1 = __importDefault(require("../../../../shared/zodValidation"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(AuthConstant_1.USER_ROLE.admin), users_controller_1.UsersController.GeTAllUsers);
router.post("/create", (0, auth_1.default)(AuthConstant_1.USER_ROLE.admin), (0, zodValidation_1.default)(user_validation_1.UserValidation.CreateUserValidation), users_controller_1.UsersController.CreateUser);
// router.put("/:id", auth(USER_ROLE.admin), UsersController.UpdateUserStatus);
exports.UsersRoutes = router;
