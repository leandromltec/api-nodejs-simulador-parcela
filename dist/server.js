"use strict";
/* Desenvolvido por Leandro M. Loureiro */
/* Site - www.devleandro.com.br */
/* Linkedin - https://www.linkedin.com/in/leandro-loureiro-dev/ */
/* Github - https://github.com/leandromltec */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//const express = require('express');
//const bodyParser = require('body-parser');
var app = express_1.default();
var PORT = process.env.PORT || 3333;
app.listen(PORT, function () {
    console.log("Iniciada na porta " + PORT);
});
app.use(express_1.default.json());
//Decodifica os parâmetros da URL
app.use(express_1.default.urlencoded({ extended: false }));
require('./controllers/controller_gerencia')(app);

