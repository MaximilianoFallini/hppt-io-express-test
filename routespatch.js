import path from 'path';

const configurarRutas = (app, rutaParcheada) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(rutaParcheada, "index.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(rutaParcheada, "index.html"));
    });
};

export default configurarRutas;