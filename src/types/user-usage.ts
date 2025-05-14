// 从目录模块导入
import { User, UserService, UserProfile } from './user';
import UserManager from './user';

// 使用示例
const userService = new UserService();
const userManager = new UserManager();

// 创建用户
const newUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

// 创建用户档案
const userProfile: UserProfile = {
  ...newUser,
  avatar: 'https://example.com/avatar.jpg',
  bio: 'Software Developer'
};

userService.addUser(newUser);
console.log(userService.getUser(1));

// 使用 UserManager
const createdUser = userManager.createUser('Jane Doe', 'jane@example.com');
console.log(createdUser); 