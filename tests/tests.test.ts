import supertest from "supertest";
import app from "../src";
import { createRandomWord, createTest } from "./factories/testFactory";

describe('Test create test POST /tests', () => {

    it('Test create test, expect status 201', async () => {
        const body = createTest();

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(201);
    });

    it('Test create test not find category, expect status 404', async () => {
        const body = createTest();
        body.category = createRandomWord();

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(404);
    });

    it('Test create test not find teacher, expect status 404', async () => {
        const body = createTest();
        body.teacher = createRandomWord();

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(404);
    });

    it('Test create test not find discipline, expect status 404', async () => {
        const body = createTest();
        body.discipline = createRandomWord();

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(404);
    });

    it('Test create test teacher not assigned to discipline, expect status 404', async () => {
        const body = createTest();
        body.discipline = "Autoconfiança";

        const result = await supertest(app).post("/tests").send(body);

        expect(result.status).toBe(404);
    });

});

describe('Test get all tests, route GET /tests', () => {

    it('Tests get all tests by disciplines, expect status 200 and array', async () => {
        const result = await supertest(app).get('/tests/disciplines').send();

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    });

});