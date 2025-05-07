import { Request, Response } from "express";
import axios from "axios";

export const getPersonagem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const personagem = response.data;

    res.json({
      nome: personagem.name,
      especie: personagem.species,
      status: personagem.status,
      imagem: personagem.image,
    });
  } catch (err) {
    res.status(500).json({ err: "Erro ao buscar personagem." });
  }
};
