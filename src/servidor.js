import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import routerUsers from './routes/routerUsers.js';

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/users', routerUsers);
servidor.get('/',(solicitud, respuesta)=>{
    respuesta.status(404).send("No encontrado");
});

export default servidor;
