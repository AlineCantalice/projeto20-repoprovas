import { Request, Response } from 'express';

import * as service from '../services/authService';
import { CreateUserData } from '../types/userTypes';

export async function signUp(req: Request, res: Response) {
    const user = req.body;

    await service.signUp({ email: user.email, password: user.password });

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user = req.body;

    const token = await service.signIn({ email: user.email, password: user.password });

    res.status(200).send({ token });
}