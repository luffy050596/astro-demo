export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserProfile extends User {
  avatar?: string;
  bio?: string;
} 