import app from "../src";
import supertest from "supertest";
import { prisma } from "../src/databases/database";
import { createEmail, createPassword, createUser } from "./factories/authFactory";

describe('Test sign up POST /signup', () => {

    it('Test register of new user, expect status 201', async () => {
        const body = createUser();

        const result = await supertest(app).post('/signup').send(body);

        expect(result.status).toBe(201);
    });

    it('Test register user with email already in use, expect status 409', async () => {
        const body = createUser();

        await supertest(app).post('/signup').send(body);
        const result = await supertest(app).post('/signup').send(body);

        expect(result.status).toBe(409);
    });

});

describe('Test sign in POST /signin', () => {

    it('Test login success, expect status 200 and token', async () => {
        const body = createUser();

        await supertest(app).post('/signup').send(body);
        const result = await supertest(app).post('/signin').send({ email: body.email, password: body.password });

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Object);
    });

    it('Test login wrong password, expect status 401', async () => {
        const body = createUser();
        const password = createPassword();

        await supertest(app).post('/signup').send(body);
        const result = await supertest(app).post('/signin').send({ email: body.email, password: password });

        expect(result.status).toBe(401);
    });

    it('Test login wrong email, expect status 401', async () => {
        const body = createUser();
        const email = createEmail();

        await supertest(app).post('/signup').send(body);
        const result = await supertest(app).post('/signin').send({ email: email, password: body.password });

        expect(result.status).toBe(401);
    });

})

afterAll(async () => {
    await prisma.$disconnect();
});