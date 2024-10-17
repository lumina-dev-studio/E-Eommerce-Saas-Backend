export interface ICreateUser {
    email: string;
    image?: string;
    name: string;
    
    role: string;
    address: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    createdAt?: string;
    updatedAt?: string;
  }
  