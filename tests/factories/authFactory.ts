import { faker } from '@faker-js/faker';

export function createUser() {
    const password = faker.internet.password(8);

    return {
        email: faker.internet.email(),
        password: password,
        confirmPassword: password
    }
}

export function createPassword() {
    return faker.internet.password(8);
}

export function createEmail() {
    return faker.internet.email();
}