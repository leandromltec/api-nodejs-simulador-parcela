

const mongoose = require('mongoose');

const stringConnection = "String";

mongoose.connect(stringConnection);
var db = mongoose.connection;

db.on('erro', console.error);
db.once('open', function(){
    console.log('Conectado ao banco de dados');
});

mongoose.Promise = global.Promise;
module.exports = mongoose;