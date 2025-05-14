// 定义一个接口
export interface User {
  id: number;
  name: string;
  email: string;
}

// 定义一个类
export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

// 导出一个常量
export const DEFAULT_USER: User = {
  id: 0,
  name: 'Guest',
  email: 'guest@example.com'
};

// 默认导出
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