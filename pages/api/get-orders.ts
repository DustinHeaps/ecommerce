
import { getServerSession } from "next-auth"
import { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from "./auth/[...nextauth]"
import { prisma } from '@/utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userSession = await getServerSession(req, res, authOptions)
  if (!userSession?.user) {
    res.status(403).json({ message: "Not logged in" })
    return
  }

  const orders = await prisma.order.findMany({
    where: { userId: userSession?.user?.id},
    include: { products: true },
  })

  res.status(200).json(orders)
}