import express from "express";
import dotenv from "dotenv";
import farmerRoutes from "./routes/farmerRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//midlewares
app.use(express.json());

//routes
app.use('/api/', farmerRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

/* import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createAgricultor = async () => {
  const agricultor = await prisma.agricultor.create({
    data: {
      nome: 'João Teste',
      email: 'joao@example.com',
      telefone: '123456789',
      tamanhoTerreno: '10 hectares',
      posicaoXTerreno: '20.1234', 
      posicaoYTerreno: '30',
    },
  });

  console.log(agricultor);
};

createAgricultor(); */