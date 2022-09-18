import { Request, Response } from "express";
import * as service from "../services/testService";

export async function createTest(req: Request, res: Response) {
    try {
        const test = req.body;

        await service.createTest(test);

        res.sendStatus(201);
    } catch (error: any) {
        res.status(error.status).send(error.message);
    }
}

export async function getTests(req: Request, res: Response) {
    try {        
        const tests = await service.getAllTests();

        console.log(tests)

        res.status(200).send(tests);
    } catch (error: any) {
        res.status(error.status).send(error.message);
    }
}