"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
    const [title, setTitle] = useState<any>("")

    const router = useRouter()
    // setTitle(0); 
    //Create a submit post
    async function submitPost(e: React.FormEvent) {
        e.preventDefault()
        const data = await fetch(`/api/createPost`, {
            method: "POST",
            body: JSON.stringify({ title }),
        })
        const res = await data.json()
        router.refresh()
        // console.log(res)
        if (!res.ok) console.log(res.message)
    }

    return (
        <form onSubmit={ submitPost }>
            <input
                className="text-black my-5 bg-red-400 border-solid mb-4"
                onChange={ (e) => setTitle(e.target.value) }
                value={ title }
                type="text"
            />
            <br />

            <button type="submit" className="my-5">Submit</button>

        </form>
    )
}