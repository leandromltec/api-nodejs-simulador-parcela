

const mongoose = require('mongoose');

const stringConnection = "mongodb+srv://db_admin:aA455055@cluster0.rrjti.mongodb.net/db_simulador_parcela?retryWrites=true&w=majority"


mongoose.connect(stringConnection);
var db = mongoose.connection;

db.on('erro', console.error);
db.once('open', function(){
    console.log('Conectado ao banco de dados');
});

mongoose.Promise = global.Promise;
module.exports = mongoose;