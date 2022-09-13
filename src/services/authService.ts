import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import auth from '../config';
dotenv.config({ path: '.env' });

import * as userRepository from '../repositories/userRepository';
import { CreateUserData } from '../types/userTypes';
import * as errorUtils from '../utils/errorUtils';

export async function signUp(user: CreateUserData) {

    const existingUser = await userRepository.findUserByEmail(user.email);

    if (existingUser) {
        throw errorUtils.conflictError("");
    }

    const SALT = 10;
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    await userRepository.insertUser({ ...user, password: hashedPassword });
}

export async function signIn(user: CreateUserData) {
    const userDb = await getUserOrFail(user);
    const token = jwt.sign({ userId: userDb.id }, auth.secret);

    return token;
}

export async function getUserOrFail(user: CreateUserData) {
    const userDb = await userRepository.findUserByEmail(user.email);
    if (!userDb) {
        throw errorUtils.unauthorizedError('Invalid credentials');
    }

    const isPasswordValid = bcrypt.compareSync(user.password, userDb.password);
    if (!isPasswordValid) {
        throw errorUtils.unauthorizedError('Invalid credentials');
    }

    return userDb;
}

export async function findUserById(id: number) {
    const user = await userRepository.findById(id);
    if (!user) {
        throw errorUtils.notFoundError('User not found');
    }

    return user;
}