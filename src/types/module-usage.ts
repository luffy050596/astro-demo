// 导入命名导出
import { User, UserService, DEFAULT_USER } from './module-example';

// 导入默认导出
import UserManager from './module-example';

// 使用示例
const userService = new UserService();
const userManager = new UserManager();

// 使用导入的类型和类
const newUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

userService.addUser(newUser);
console.log(userService.getUser(1));

// 使用默认用户
console.log(DEFAULT_USER);

// 使用 UserManager
const createdUser = userManager.createUser('Jane Doe', 'jane@example.com');
console.log(createdUser); 