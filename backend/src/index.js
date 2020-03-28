const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const { errors } = require('celebrate');

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

/**
 * Métodos HTTP
 * 
 * GET - Buscar informações do back-end;
 * POST - Criar uma informação no back-end;
 * PUT - Alterar uma informação no back-end;
 * DELETE - Excluir uma informação no back-end;
 */

app.listen(3333);