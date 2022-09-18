import { prisma } from "../src/databases/database";

async function main() {

    const terms = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 }
    ];

    terms.forEach(async (item) => {
        await prisma.terms.upsert({
            where: { number: item.number },
            update: {},
            create: item
        });
    });

    const categories = [
        { name: "Projeto" },
        { name: "Prática" },
        { name: "Recuperação" }
    ];

    categories.forEach(async (item) => {
        await prisma.categories.upsert({
            where: { name: item.name },
            update: {},
            create: item
        });
    });

    const teachers = [
        { name: "Diego Pinho" },
        { name: "Bruna Hamori" }
    ];

    teachers.forEach(async (item) => {
        await prisma.teachers.upsert({
            where: { name: item.name },
            update: {},
            create: item
        });
    });

    const disciplines = [
        { name: "HTML e CSS", termId: 1 },
        { name: "JavaScript", termId: 2 },
        { name: "React", termId: 3 },
        { name: "Humildade", termId: 1 },
        { name: "Planejamento", termId: 2 },
        { name: "Autoconfiança", termId: 3 }
    ];

    disciplines.forEach(async (item) => {
        await prisma.disciplines.upsert({
            where: { name: item.name },
            update: {},
            create: item
        });
    });

    const teachersDisciplines = [
        { teacherId: 1, disciplineId: 1 },
        { teacherId: 1, disciplineId: 2 },
        { teacherId: 1, disciplineId: 3 },
        { teacherId: 2, disciplineId: 4 },
        { teacherId: 2, disciplineId: 5 },
        { teacherId: 2, disciplineId: 6 },
    ];

    teachersDisciplines.forEach(async (item) => {
        await prisma.teachersDisciplines.upsert({
            where: { teacherId_disciplineId: { teacherId: item.teacherId, disciplineId: item.disciplineId } },
            update: {},
            create: item
        });
    });
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})