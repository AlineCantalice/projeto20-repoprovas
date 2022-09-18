import * as categoryService from "./categoryService";
import * as teacherService from "./teacherService";
import * as disciplineService from "./disciplineService";
import * as teacherDisciplineService from "./teacherDisciplineService";
import * as errorUtils from '../utils/errorUtils';
import * as repository from '../repositories/testRepository';
import { CreateTestData } from "../types/testTypes";

export async function createTest(body: any) {

    const category = await categoryService.findIdByName(body.category);

    if (!category) {
        throw errorUtils.notFoundError("Category not found!");
    }

    const teacher = await teacherService.findIdByName(body.teacher);

    if (!teacher) {
        throw errorUtils.notFoundError("Teacher not found!");
    }

    const discipline = await disciplineService.findIdByName(body.discipline);

    if (!discipline) {
        throw errorUtils.notFoundError("Discipline not found!");
    }

    const teacherDiscipline = await teacherDisciplineService.findIdByTeacherIdAndDisciplineId(teacher.id, discipline.id)

    if (!teacherDiscipline) {
        throw errorUtils.notFoundError("Teacher is not assigned for this discipline!");
    }

    const test: CreateTestData = {
        name: body.name,
        pdfUrl: body.pdfUrl,
        categoryId: category.id,
        teacherDisciplineId: teacherDiscipline.id
    }

    await repository.insert(test);
}

