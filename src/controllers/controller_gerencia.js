
const express = require('express');

const Gerencia = require("../models/model_gerencia");

const mongoose = require('../database');

const router = express.Router();

var db = mongoose.connection;

var collectionManagement;

db.once('open', () => {
    collectionManagement = db.collection('coll_gerencia')
})

router.get('/gerencia', async (request, response) => {
   
    await collectionManagement.find().toArray((errorCollection, results)=> {
        if(errorCollection === null){
            try{
                return response.status(200).json(results);
            }
            catch(err){
                return response.status(400).json({error :"Erro 1" + err.response})
            }
           
        }
        else 
        return response.status(400).json({error :"Erro 1" + errorCollection})
    })

});