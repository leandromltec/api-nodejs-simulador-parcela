

var management = require('../repositories/repository_management');

const express = require('express');

//const Gerencia = require("../models/model_gerencia");

const mongoose = require('../database');

const router = express.Router();

var db = mongoose.connection;

var collectionManagement;

db.once('open', () => {
    collectionManagement = db.collection('coll_gerencia')
})

router.get('/', async (request, response) => {

    await collectionManagement.find().toArray((errorCollection, results) => {
        if (errorCollection === null) {
            try {
               
                return response.status(200).json(results);
            }
            catch (errorAllManagement) {
                return response.status(400).json({ error: "Error when returning all managements. (Português: Erro ao retornar todas as gerências) " + errorAllManagement })
            }
            finally {
                 
            }
            }
        else
            return response.status(400).json({ error: "Erro collection managements (mongodb). (Português: Erro na coleção de gerência (mongodb)" + errorCollection })
    })

});



//Chamada de rotas relacionadas as requisições de gerencia
module.exports = app => app.use('/gerencia', router);