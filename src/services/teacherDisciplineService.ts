import { getTeacherDisciplineIdByTeacherIdAndDisciplineId } from "../repositories/teacherDisciplineRepository";

export async function findIdByTeacherIdAndDisciplineId(teacherId: number, disciplineId: number) {
    return await getTeacherDisciplineIdByTeacherIdAndDisciplineId(teacherId, disciplineId);
}