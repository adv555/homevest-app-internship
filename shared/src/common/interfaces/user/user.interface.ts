export interface IUser {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}