import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createFarmer = async (req: Request, res: Response) => {
    try {
        if (req.body.nome != "" && req.body.email != "" && req.body.telefone != "" && req.body.tamanhoTerreno != "" && req.body.posicaoXTerreno != "" && req.body.posicaoYTerreno != "") {
            const farmer = await prisma.agricultor.create({
                data: {
                    nome: req.body.nome,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    tamanhoTerreno: req.body.tamanhoTerreno,
                    posicaoXTerreno: req.body.posicaoXTerreno,
                    posicaoYTerreno: req.body.posicaoYTerreno,
                },
            });
            res.status(201).json({ "message": "Agricultor criado com sucesso!" });
        } else {
            res.status(400).json({ "message": "Todos os campos devem ser preenchidos!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAllFarmers = async (req: Request, res: Response) => {
    try {
        const farmer = await prisma.agricultor.findMany();
        res.status(200).json(farmer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};