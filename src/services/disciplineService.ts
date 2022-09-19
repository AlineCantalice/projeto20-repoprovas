import * as repository from "../repositories/disciplineRepository";

export async function findIdByName(name: string) {
    return await repository.getDisciplineIdByName(name);
}