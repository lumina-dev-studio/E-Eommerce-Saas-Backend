import { z } from "zod";

const RegisterValidation = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});
const CreateUserValidation = z.object({
  email: z.string().email(),

  userName: z.string(),
  userAddress: z.string(),
  userRole: z.string(),
  
  password: z.string(),
});
const loginValidation = z.object({
  email: z.string().email(),

  password: z.string(),
});
const changePassword = z.object({
  oldPassword: z.string(),

  newPassword: z.string(),
});
export const AuthValidation = {
  RegisterValidation,
  CreateUserValidation,
  loginValidation,
  changePassword,
};
