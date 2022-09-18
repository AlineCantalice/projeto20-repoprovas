import { prisma } from "../databases/database";

export async function findAll() {
    return await prisma.terms.findMany({
        orderBy: { number: 'asc' },
        select: {
            id: true,
            number: true,
            disciplines: {
                select: {
                    id: true,
                    name: true,
                    teachersDisciplines: {
                        select: {
                            tests: {
                                select: {
                                    category: {
                                        include: {
                                            tests: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    pdfUrl: true,
                                                    teacherDiscipline: {
                                                        select: {
                                                            teacher: {
                                                                select: {
                                                                    id: true,
                                                                    name: true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                    }
                }
            }
        }
    });
}