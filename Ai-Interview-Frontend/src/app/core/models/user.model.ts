export interface AppUser {
  uid: string;
  name: string;
  email: string;
  role: 'candidate' | 'admin';
  experience?: number;
  createdAt: number;
}