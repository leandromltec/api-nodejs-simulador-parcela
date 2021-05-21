/* Desenvolvido por Leandro M. Loureiro */
/* Site - www.devleandro.com.br */
/* Linkedin - https://www.linkedin.com/in/leandro-loureiro-dev/ */
/* Github - https://github.com/leandromltec */


const express = require('express');

const app = express();



const PORT = process.env.PORT || 4030;

app.listen(PORT, () => {
    console.log("Iniciada")
})

