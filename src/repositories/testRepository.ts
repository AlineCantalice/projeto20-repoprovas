import { prisma } from "../databases/database";
import { CreateTestData } from "../types/testTypes";

export async function insert(test: CreateTestData) {
    await prisma.tests.create({ data: test });
}