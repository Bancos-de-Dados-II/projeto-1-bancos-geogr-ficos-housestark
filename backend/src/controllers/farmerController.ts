import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllFarmers = async (req: Request, res: Response) => {
    try {
        const farmer = await prisma.agricultor.findMany();
        res.status(200).json(farmer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};