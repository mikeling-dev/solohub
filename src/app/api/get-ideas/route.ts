import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const ideas = await prisma.idea.findMany({
        orderBy: { createdAt: "desc" },
      });
      res.status(200).json(ideas);
    } catch (error) {
      res.status(500).json({ message: "Error fetching ideas", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
