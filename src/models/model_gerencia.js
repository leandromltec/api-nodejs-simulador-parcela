const { Int32 } = require('bson');
const mongoose = require('mongoose');

const GerenciaSchema = new mongoose.Schema({

    id: {
        type: String,
        unique: true

    },

    gerencia: {
        type: String,
        unique: true
    }

})

const Gerencia = mongoose.model('Gerencia', GerenciaSchema);

module.exports = Gerencia;