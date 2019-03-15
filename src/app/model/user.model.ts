export class UserModel {
    _id: number;
    type: string;
    userType: string;
    roles?: any[];
    tokenHash: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: number;
    organization?: number;
    meta?: string;
    createdAt: Date;
    updatedAt: Date;
}

export class ResetPasswordModel {
    password: string;
}
