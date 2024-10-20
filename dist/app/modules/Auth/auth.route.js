"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const zodValidation_1 = __importDefault(require("../../../shared/zodValidation"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post("/register", (0, zodValidation_1.default)(auth_validation_1.AuthValidation.RegisterValidation), auth_controller_1.AuthController.RegistrationUser);
router.post("/login", (0, zodValidation_1.default)(auth_validation_1.AuthValidation.loginValidation), auth_controller_1.AuthController.loginUser);
// router.put(
//   "/changePassword",
//   auth(USER_ROLE.admin, USER_ROLE.user),
//   zodValidation(AuthValidation.changePassword),
//   AuthController.ChangePassword
// );
exports.AuthRoutes = router;
