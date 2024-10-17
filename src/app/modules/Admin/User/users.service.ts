import prisma from "../../../../shared/prisma";
import { ICreateUser } from "./user.interface";
import bcrypt from "bcrypt";

// Create  User
const CrateUsersDB = async (payload:ICreateUser| any) => {
  const hashedPassword: string = await bcrypt.hash(payload.password, 12);

  payload.password = hashedPassword;
  payload.confirmPassword= hashedPassword;

  const result = await prisma.user.create({ data: payload });

  const { id, name, email, } = result;

  return { id, name, email };
};

// Get All Users
const GetAllUsersDB = async () => {
  const result = await prisma.user.findMany()
  return result;
};

//  Update User Status
const UpdateUserStatusDB = async (id: string, payload: any) => {
  // const result = await prisma.user.update({
  //   where: {
  //     id: id,
  //   },
  //   data: payload,
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     photo: true,
  //     age: true,
  //     bio: true,
  //     userStatus: true,
  //     role: true,

  //     createdAt: true,
  //     updatedAt: true,
  //   },
  // });
  // return result;
};

export const UsersServices = {
  UpdateUserStatusDB,
  GetAllUsersDB,
  CrateUsersDB
};
