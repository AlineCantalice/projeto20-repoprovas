import { prisma } from "../databases/database";

export async function getDisciplineIdByName(name: string) {
    return await prisma.disciplines.findUnique(
        {
            where: { name },
            select: { id: true }
        }
    )
}