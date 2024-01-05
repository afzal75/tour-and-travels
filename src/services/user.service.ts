import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
    const result = User.create(payload);
    return result;
}

const getAllUser = async (): Promise<IUser[]> => {
    const result = await User.find({
        userStatus: "active"
    });
    return result
}

const getSingleUser = async (id: string): Promise<IUser | null> => {
    const result = await User.findById(id);
    return result
}
const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
    const result = await User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result
}

const deleteUser = async (id: string): Promise<IUser | null> => {
    const result = await User.findByIdAndDelete(id)
    return result;
}


export const UserService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}