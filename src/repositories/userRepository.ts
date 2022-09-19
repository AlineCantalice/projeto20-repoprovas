import { prisma } from "../databases/database";
import { CreateUserData } from "../types/userTypes";

export async function findById(id: number) {
  return await prisma.users.findUnique({
    where: { id }
  });
}

export async function findUserByEmail(email: string) {
  return await prisma.users.findUnique({
    where: {
      email
    }
  });
}

export async function insertUser(user: CreateUserData) {
  return await prisma.users.create({
    data: user
  });
}