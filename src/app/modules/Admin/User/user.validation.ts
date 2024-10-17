import { z } from "zod";

export const CreateUserValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  image: z.string().optional(),
  name: z.string().min(1, { message: "Username is required" }),

  role: z.enum(['User', 'Admin'], { message: "Invalid user role" }),
  address: z.string().min(1, { message: "Address is required" }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters" }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // This tells Zod where the error is
});

  export const UserValidation = {
    CreateUserValidation
  };
  