import { prisma } from "../databases/database";
import { CreateTestData } from "../types/testTypes";

export async function insert(test: CreateTestData) {
    await prisma.tests.create({ data: test });
}

export async function getTestsByDisciplines() {
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
                                        select: {
                                            id: true,
                                            name: true,
                                            tests: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    pdfUrl: true,
                                                    teacherDiscipline: {
                                                        include: {
                                                            teacher: true
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
                }
            }
        }
    });
}

export async function getAllTestsByTeacher() {
    return await prisma.teachersDisciplines.findMany({
        select: {
            teacher: {
                select: {
                    id: true,
                    name: true,
                    teachersDisciplines: {
                        select: {
                            tests: {
                                include: {
                                    category: {
                                        select: {
                                            id: true,
                                            name: true,
                                            tests: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    pdfUrl: true,
                                                    teacherDiscipline: {
                                                        select: {
                                                            discipline: {
                                                                select: {
                                                                    id: true,
                                                                    name: true,
                                                                    term: {
                                                                        select: {
                                                                            id: true,
                                                                            number: true
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
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}