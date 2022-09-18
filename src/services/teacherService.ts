import { getTeacherIdByName } from "../repositories/teacherRepository";

export async function findIdByName(name: string) {
    return await getTeacherIdByName(name);
}