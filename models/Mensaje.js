import mongoose from 'mongoose';

const esquemaDeProducto = new mongoose.Schema({
    id: Number,
    autorId: String,
    nombre: String,
    texto: String,
    hora: String,
    fecha: {
        type: Date,
        default: Date.now
    }
});

export const Mensaje = mongoose.model("Mensaje", esquemaDeProducto);
