"use server"
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";

export const getUser = async (email) => {
    await connectDB();
    const oldUser = await User.findOne({ email }).lean();
    oldUser._id = oldUser._id.toString();

    return oldUser;
}

export const getName = async (name, email) => {
    await connectDB();
    const oldName = await User.findOne({ email })

    if (oldName) {
        await User.updateOne({ "name": name })
    }

    return true;
}

export const createUserAccount = async (form) => {
    await connectDB();

    let existingUser = await User.findOne({ email: form.email });
    if (existingUser) {
        return null;
    }

    await User.create({
        email: form.email,
        name: form.name,
        signUp: {
            password: form.password,
            name: form.name,
            email: form.email,
        },
    })
    return true;
}