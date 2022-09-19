import supertest from "supertest";
import app from "../src";
import { createUser } from "./factories/authFactory";
import { createRandomWord, createTest } from "./factories/testFactory";

async function getToken() {
    const body = createUser();
    await supertest(app).post('/signup').send(body);
    return await supertest(app).post('/signin').send({ email: body.email, password: body.password });
}

describe('Test create test POST /tests', () => {

    it('Test create test, expect status 201', async () => {
        const body = createTest();

        const token = await getToken();

        const result = await supertest(app).post("/tests").send(body).set({ Authorization: token.body.token });

        expect(result.status).toBe(201);
    });

    it('Test create test not find category, expect status 404', async () => {
        const body = createTest();
        body.category = createRandomWord();

        const token = await getToken();

        const result = await supertest(app).post("/tests").send(body).set({ Authorization: token.body.token });

        expect(result.status).toBe(404);
    });

    it('Test create test not find teacher, expect status 404', async () => {
        const body = createTest();
        body.teacher = createRandomWord();

        const token = await getToken();

        const result = await supertest(app).post("/tests").send(body).set({ Authorization: token.body.token });

        expect(result.status).toBe(404);
    });

    it('Test create test not find discipline, expect status 404', async () => {
        const body = createTest();
        body.discipline = createRandomWord();

        const token = await getToken();

        const result = await supertest(app).post("/tests").send(body).set({ Authorization: token.body.token });

        expect(result.status).toBe(404);
    });

    it('Test create test teacher not assigned to discipline, expect status 404', async () => {
        const body = createTest();
        body.discipline = "Autoconfiança";

        const token = await getToken();

        const result = await supertest(app).post("/tests").send(body).set({ Authorization: token.body.token });

        expect(result.status).toBe(404);
    });

    it('Test create test without token, expect status 401', async () => {
        const body = createTest();

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(401);
    });

});

describe('Test get all tests, route GET /tests/disciplines', () => {

    it('Tests get all tests by disciplines, expect status 200 and array', async () => {
        const token = await getToken();

        const result = await supertest(app).get('/tests/disciplines').send().set({ Authorization: token.body.token });

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    });

    it('Tests get all tests by disciplines without token, expect status 401', async () => {
        const body = createTest();

        const result = await supertest(app).get("/tests/disciplines").send(body);

        expect(result.status).toBe(401);
    });

});

describe('Test get all tests, route GET /tests/teachers', () => {

    it('Tests get all tests by teachers, expect status 200 and array', async () => {
        const token = await getToken();

        const result = await supertest(app).get('/tests/teachers').send().set({ Authorization: token.body.token });

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    });

    it('Tests get all tests by teachers without token, expect status 401', async () => {
        const body = createTest();

        const result = await supertest(app).get("/tests/teachers").send(body);

        expect(result.status).toBe(401);
    });

});