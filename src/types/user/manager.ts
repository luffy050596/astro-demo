import { User } from './types';
import { UserService } from './service';

export default class UserManager {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createUser(name: string, email: string): User {
    const user: User = {
      id: Date.now(),
      name,
      email
    };
    this.service.addUser(user);
    return user;
  }
} 