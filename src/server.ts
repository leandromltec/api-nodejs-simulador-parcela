/* Desenvolvido por Leandro M. Loureiro */
/* Site - http://www.devleandro.com.br */
/* Linkedin - https://www.linkedin.com/in/leandro-loureiro-dev/ */
/* Github - https://github.com/leandromltec */

import express from 'express';

//const passport = require('passport');

//const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
//app.use(passport.initialize());

//Decodifica os parâmetros da URL
app.use(express.urlencoded({ extended: false}));

require('./controllers/controller_gerencia')(app);
require('./controllers/controller_installation')(app);
require('./controllers/controller_usuario')(app);
//require('./repositories/passport')(passport);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log("Iniciada na porta "+ PORT);
})


