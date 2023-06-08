import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

class UserController {
    async getUserById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);

        try {
            const user = await UserService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error('Error retrieving user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async register(req: Request, res: Response) {
        const { username, email, password } = req.body;

        try {
            const user = await UserService.getUserByEmail(email);

            if (user) {
                return res.status(400).json({ message: 'Email already registered' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await UserService.createUser(username, email, hashedPassword);

            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await UserService.getUserByEmail(email);

            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user.id }, 'secret-key');

            return res.status(200).json({ token });
        } catch (error) {
            console.error('Error logging in:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new UserController();
