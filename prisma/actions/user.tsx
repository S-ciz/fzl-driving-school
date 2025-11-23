"use server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function postUser(name: string, email: string, password: string) {
  //check that user doesn' exist first

  const curr_user = await getUser(email, password);

  if (curr_user == null) {
    await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: "STUDENT",
      },
    });

    return { status: true };
  }

  return { status: false };
}

export async function getUser(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    return user;
  } catch (err) {
    console.error(err);

    return null;
  }
}
