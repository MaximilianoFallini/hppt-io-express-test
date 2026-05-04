import { Mensaje } from './models/Mensaje.js';

const configurarSockets = (servidor_socket) => {
    servidor_socket.on("connection", (socket) => {
        console.log("Cliente conectado a través de Socket.IO");

        socket.on("mensaje_chat", async (mensaje) => {
            try {
                const nuevoMensaje = {
                    id: Date.now(),
                    autorId: socket.id,
                    nombre: mensaje.nombre,
                    texto: mensaje.texto,
                    hora: new Date().toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                };

                await Mensaje.create(nuevoMensaje);
                servidor_socket.emit("mensaje_chat", nuevoMensaje);
            } catch (error) {
                console.error("Error al guardar el mensaje:", error);
            }
        });
    });
};

export default configurarSockets;