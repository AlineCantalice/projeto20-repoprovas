import { getCategoryIdByName } from "../repositories/categoryRepository";

export async function findIdByName(name: string) {
    return await getCategoryIdByName(name);
}