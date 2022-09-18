import { prisma } from "../databases/database";

export async function getCategoryIdByName(name: string) {
    return prisma.categories.findUnique(
        {
            where: { name },
            select: { id: true }
        });
}