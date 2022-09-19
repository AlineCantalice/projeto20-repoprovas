import { prisma } from "../databases/database";

export async function getTeacherDisciplineIdByTeacherIdAndDisciplineId(teacherId: number, disciplineId: number) {
    return await prisma.teachersDisciplines.findUnique(
        {
            where: { teacherId_disciplineId: { teacherId, disciplineId } },
            select: { id: true }
        }
    )
}