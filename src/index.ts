import express from "express";
// import axios from "axios";
// import { stat } from "fs";
import personagemRoutes from "./routes/personagemRoutes";

const app = express();
const PORT = 3000;

app.use("/personagem", personagemRoutes);

app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})