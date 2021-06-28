

const express = require('express');
const mongoose = require('../database');

const router = express.Router();

var db = mongoose.connection;

var collectionInstallation;

db.once('open', () => {
    collectionInstallation = db.collection('coll_installation')
})

router.get('/', async (request, response) => {

    const query = parseInt(request.query["management"]);

    await collectionInstallation.find({'id_management':{'$eq': query}}).toArray((errorCollection, results) => {
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
module.exports = app => app.use('/installation', router);