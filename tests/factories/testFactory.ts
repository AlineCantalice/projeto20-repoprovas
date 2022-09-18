import { faker } from '@faker-js/faker';

export function createTest() {
    return {
      name: faker.lorem.word(2),
      pdfUrl: faker.internet.url(),
      category: "Projeto",
      discipline: "JavaScript",
      teacher: "Diego Pinho"
    }
}

export function createRandomWord() {
    return faker.lorem.word(1);
}