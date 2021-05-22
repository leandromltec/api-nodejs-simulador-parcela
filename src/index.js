/* Desenvolvido por Leandro M. Loureiro */
/* Site - www.devleandro.com.br */
/* Linkedin - https://www.linkedin.com/in/leandro-loureiro-dev/ */
/* Github - https://github.com/leandromltec */


const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(express.json())

//Decodifica os parâmetros da URL
app.use(express.urlencoded({ extended: false}));

require('./controllers/controller_gerencia')(app);


const PORT = process.env.PORT || 3333;

//app.listen(3333);

app.listen(PORT, () => {
    console.log("Iniciada na porta "+ PORT);
})

