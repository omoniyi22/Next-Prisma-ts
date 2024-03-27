import prisma from "@/prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

// type Data = {
//     id: number;
//     title: string;
//     content: string | null;
//     published: boolean;
// }

type postProps = {
    title: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const post: postProps = JSON.parse(req.body);
        if (req.method === "POST") {
            if (!post.title.length) {
                return res.status(500).json({ message: "Please do not leave this empty" })
            }
            try {
                const data = await prisma.post.create({
                    data: {
                        title: post.title
                    }
                })
                const data1 = await prisma.post.findMany()

                console.log({ data, data1 })
                res.status(200).json(data)
            } catch (error) {
                return res.status(500).json({ message: "Error creating a new post" })
            }
        }
    } catch (error) {
        console.log({ error })
    }
}