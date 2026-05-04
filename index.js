import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';


//Convierte la URL del archivo actual en una ruta que Node puede usar.
const __filename = fileURLToPath(import.meta.url);
//Obtiene la carpeta donde esta este archivo index.js.
const __dirname = dirname(__filename);
//Parchea la ruta completa hacia la carpeta dist de forma compatible con cualquier sistema operativo.
const RutaParcheada = path.join(__dirname, "dist");

//Crear servidor Express
const servidor_express = express();
//HTTP Nativo
const servidor_http = createServer(servidor_express);
//Creamos el servidor de Socket.IO 
const servidor_socket = new Server(servidor_http);

//Middleware: servir archivos estaticos desde la carpeta "dist" (donde se encuentra el build de React)
servidor_express.use(express.static(RutaParcheada))
//Middleware: parsear el body de las peticiones para poder recibirlos en formato JSON
servidor_express.use(express.json())

//Rutas
servidor_express.get("/", (req, res) => {
    res.sendFile(RutaParcheada + "/index.html");
});

// Manejo de rutas React (SPA)
servidor_express.get("*", (req, res) => {
    res.sendFile(RutaParcheada + "/index.html");
});

//Manejo de conexiones Socket.IO //servidor_socket.addEventListener
servidor_socket.on("connection",(socket)=>{
    console.log("Cliente conectado a travez de Socket.IO");

    //Escuchamos el mensaje que manda un cliente desde el chat.
    socket.on("mensaje_chat", (mensaje) => {
        //Reenviamos el mensaje a todos los clientes conectados.
        servidor_socket.emit("mensaje_chat", {
            id: Date.now(),
            autorId: socket.id,
            nombre: mensaje.nombre,
            texto: mensaje.texto,
            hora: new Date().toLocaleTimeString("es-AR", {
                hour: "2-digit",
                minute: "2-digit"
            })
        });
    });
});

//Conexion a MongoDB
mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Conectado a MongoDB");
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
    });

//Puerto
servidor_http.listen(3000, () => {
    console.log("Servidor HTTP y Socket.IO escuchando en el puerto 3000");
});
