import { getDisciplineIdByName } from "../repositories/disciplineRepository";

export async function findIdByName(name: string) {
    return await getDisciplineIdByName(name);
}