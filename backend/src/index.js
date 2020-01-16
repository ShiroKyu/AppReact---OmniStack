const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://paulo:avataraang@cluster0-1vgbx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 
// Query params: request.query (Filtros, ordenação, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

// app.post('/users', (request, response) => {
//     console.log(request.body)
//     return response.json({ message: 'Hello Omnistack' });
// });

app.listen(3333);