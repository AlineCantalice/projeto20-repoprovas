import { Request, Response } from 'express';

import * as service from '../services/authService';

export async function signUp(req: Request, res: Response) {
    try {
        const user = req.body;

        await service.signUp({ email: user.email, password: user.password });

        res.sendStatus(201);
    } catch (error: any) {
        res.status(error.status).send(error.message);
    }
}

export async function signIn(req: Request, res: Response) {
    try {
        const user = req.body;

        const token = await service.signIn({ email: user.email, password: user.password });

        res.status(200).send({ token });
    } catch (error: any) {
        res.status(error.status).send(error.message);
    }
}