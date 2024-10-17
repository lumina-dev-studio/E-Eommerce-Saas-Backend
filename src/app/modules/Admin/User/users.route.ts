import express from "express";
import { UsersController } from "./users.controller";
import auth from "../../../middlewares/auth";
import { USER_ROLE } from "../../Auth/AuthConstant";
import zodValidation from "../../../../shared/zodValidation";
import { UserValidation } from "./user.validation";


const router = express.Router();

router.get(
  "/",
  auth(USER_ROLE.admin,),

  UsersController.GeTAllUsers
);
router.post(
  "/create",
 
  auth(USER_ROLE.admin,),
  zodValidation(UserValidation.CreateUserValidation),

  UsersController.CreateUser
);

// router.put("/:id", auth(USER_ROLE.admin), UsersController.UpdateUserStatus);

export const UsersRoutes = router;
