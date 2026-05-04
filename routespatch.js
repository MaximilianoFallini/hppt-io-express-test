import path from 'path';
import { Mensaje } from './models/Mensaje.js';

const configurarRutas = (app, rutaParcheada) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(rutaParcheada, "index.html"));
    });

    app.get("/api/mensajes", async (req, res) => {
        try {
            const mensajes = await Mensaje.find().sort({ fecha: 1 });
            res.json(mensajes);
        } catch (error) {
            console.error("Error al obtener mensajes:", error);
            res.status(500).json({ error: "Error al obtener mensajes" });
        }
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(rutaParcheada, "index.html"));
    });
};

export default configurarRutas;