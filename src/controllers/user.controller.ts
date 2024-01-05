/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const result = await UserService.createUser(userData)
        res.status(201).json({
            status: "success",
            message: "User Created Successfully",
            data: result
        })
    }
    catch (err: any) {
        res.status(404).json({
            status: "User Creation Failed",
            message: err.message || "something went wrong"
        })
    }
}

export const UserController = {
    createUser
}