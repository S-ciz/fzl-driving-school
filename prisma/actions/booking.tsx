"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getBookings(id: number) {
  try {
    const data = await prisma.booking.findMany({
      where: {
        studentId: id,
      },
    });
    return JSON.parse( JSON.stringify(data));
  } catch (err) {
    console.log(err);

    return null;
  }
}
