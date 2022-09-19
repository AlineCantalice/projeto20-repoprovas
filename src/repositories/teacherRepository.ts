import { prisma } from "../databases/database";

export async function getTeacherIdByName(name: string) {
    return await prisma.teachers.findUnique(
        {
            where: { name },
            select: { id: true }
        }
    )
}