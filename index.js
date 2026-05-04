import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';

import conectarDB from './mongodatabase.js';
import configurarMiddlewares from './middlewares.js';
import configurarRutas from './routespatch.js';
import configurarSockets from './sockets.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const RutaParcheada = path.join(__dirname, "dist");

const servidor_express = express();
const servidor_http = createServer(servidor_express);
const servidor_socket = new Server(servidor_http);

configurarMiddlewares(servidor_express, RutaParcheada);
configurarRutas(servidor_express, RutaParcheada);
configurarSockets(servidor_socket);
await conectarDB();

servidor_http.listen(3000, () => {
    console.log("Servidor HTTP y Socket.IO escuchando en el puerto 3000");
});