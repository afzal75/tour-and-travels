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

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUser()
        res.status(201).json({
            status: "success",
            message: "All User Retrived Successfully",
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
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await UserService.getSingleUser(id)
        res.status(201).json({
            status: "success",
            message: "Single User Retrived Successfully",
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
const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await UserService.updateUser(id, req.body)
        res.status(201).json({
            status: "success",
            message: "User Updated Successfully",
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
const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await UserService.deleteUser(id)
        res.status(201).json({
            status: "success",
            message: "User deleted Successfully",
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
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}