export interface UserModel {
    _id: number;
    type: string;
    userType: string;
    roles?: any[];
    tokenHash: string;
    organization?: number;
    meta?: string;
    createdAt: Date;
    updatedAt: Date;

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: number;
    status: boolean;
    roleId: number;
    token: string;
}

export interface ResetPasswordModel {
    password: string;
}
