

const express = require('express');
const mongoose = require('../database');

const router = express.Router();

var db = mongoose.connection;

var collectionOperational;

db.once('open', () => {
    collectionOperational = db.collection('coll_operational')
})

router.get('/', async (request, response) => {

    const queryIdinstallation = parseInt(request.query["installation"]);

    await collectionOperational.find({'id_installation':{'$eq': queryIdinstallation}}).toArray((errorCollection, results) => {
        if (errorCollection === null) {
            try {
                
                return response.status(200).json(results);
            }
            catch (errorAllManagement) {
                return response.status(400).json({ error: "Error when returning operational. (Português: Erro ao retornar operacional) " + errorAllManagement })
            }
            finally {
                 
            }
            }
        else
            return response.status(400).json({ error: "Erro collection operational (mongodb). (Português: Erro na coleção operacional (mongodb)" + errorCollection })
    })
});


//Chamada de rotas relacionadas as requisições de gerencia
module.exports = app => app.use('/operational', router);