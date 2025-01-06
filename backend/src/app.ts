/* import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
}); */

import { PrismaClient } from '@prisma/client';

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

createAgricultor();