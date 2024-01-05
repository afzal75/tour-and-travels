import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

const createUser = async (payload: IUser) => {
    const result = User.create(payload);
    return result;
}

export const UserService = {
    createUser
}