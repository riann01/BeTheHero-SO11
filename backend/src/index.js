const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * Métodos HTTP
 * 
 * GET - Buscar informações do back-end;
 * POST - Criar uma informação no back-end;
 * PUT - Alterar uma informação no back-end;
 * DELETE - Excluir uma informação no back-end;
 */

app.listen(3333);