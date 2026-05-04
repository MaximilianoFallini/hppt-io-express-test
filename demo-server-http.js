// demo-server-http.js no funcional solo practica

import http from 'http';

const mi_servidor = http.createServer();

mi_servidor.on("request", (req, res) => {
    console.log("Request received");
    console.log("URL: ", req.url);
    console.log("METHOD: ", req.method);
    console.log("HTTP VERSION: ", JSON.stringify(req.httpVersion));

    res.end("Pagina Principal");
});

mi_servidor.listen(3000, () => {
    console.log("Server is running on port 3000")
});