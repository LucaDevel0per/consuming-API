import express from "express";
import axios from "axios";
import { stat } from "fs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});

app.get("/personagem/:id", async (req, res) =>{
    const { id } = req.params;

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const personagem = response.data;

        res.json({
            nome: personagem.name,
            especie: personagem.species,
            status: personagem.status,
            imagem: personagem.image
        });
    } catch (err) {
        res.status(500).json({err: "Erro ao buscar personagem."});
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})