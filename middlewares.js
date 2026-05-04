import express from 'express';
import path from 'path';

const configurarMiddlewares = (app, rutaParcheada) => {
    app.use(express.static(rutaParcheada));
    app.use(express.json());
};

export default configurarMiddlewares;