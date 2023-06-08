import User from '../models/user.model';

class UserService {
    async getUserByEmail(email: string) {
        return User.findOne({ where: { email } });
    }

    async getUserById(userId: number) {
        return User.findByPk(userId);
    }

    async createUser(username: string, email: string, password: string) {
        return User.create({
            id: 0,
            username,
            email,
            password,
        });
    }
}

export default new UserService();
