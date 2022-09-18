import { prisma } from "../databases/database";

export async function getDisciplineIdByName(name: string) {
    return prisma.disciplines.findUnique(
        {
            where: { name },
            select: { id: true }
        }
    )
}