export interface IInvestor {
    userId?: string;
    avatar?: string;
    username?: string;
    followersCount?: number;
    followingCount?: number;
    interest?: string;
    investment?: string;
    publication?: string;
    city?: string;
    phoneNumber?: string;
    paymentMethods?: string;
    zipcode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
