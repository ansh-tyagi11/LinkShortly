"use client"
import React from "react";
import useUserData from "./useUserData";
import { forUserlink } from "@/actions/useractions";
import { useState, useEffect } from "react";

export default function useUserLinks() {
    const { data, session } = useUserData();
    const [l, setL] = useState([])
    
    useEffect(() => {
        getLink();
    }, [])

    const getLink = async () => {
        const a = await forUserlink(data.email || session?.user.email)
        let c = a.a3;
        setL(a)
    }
    console.log(l)
    return { l }
}