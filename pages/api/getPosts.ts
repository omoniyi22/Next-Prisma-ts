import prisma from "@/prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

// type Data = {
//     id: number;
//     title: string;
//     content: string | null;
//     published: boolean;
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === "GET") {
        try {
            //Get prisma to fetch the posts
            const data = await prisma.post.findMany()
            res.status(200).json(data)
            console.log({ log: data })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    // res.status(200).json({ name: "John Doe" })
}