import UserRepository from '../repository/userRepository';
import UserService from '../service/userService';
import Database from '../util/database';

export default class UserFactory {
  static async createInstance() {
    const db = new Database ({ connectionString: 'mongodb://localhost' });
    const dbConnection = await db.connect();
    const userRepository = new UserRepository({dbConnection});
    const userService = new UserService({userRepository});

    return userService;
  }
}