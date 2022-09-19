import { prisma } from "../databases/database";

export async function getCategoryIdByName(name: string) {
    return await prisma.categories.findUnique(
        {
            where: { name },
            select: { id: true }
        });
}