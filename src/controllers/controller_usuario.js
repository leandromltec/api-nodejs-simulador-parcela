

const express = require('express');
const mongoose = require('../database');
var jwt = require('jwt-simple');
var User = require('../models/model_usuario');

const router = express.Router();

var db = mongoose.connection;

var collectionUsuario;

db.once('open', () => {
    collectionUsuario = db.collection('coll_usuarios')
});

var functions = {

    addNew: function (req, res) {
        if ((!req.body.name) || (req.body.password)) {
            res.json({ sucess: false, msg: "Preencha os campos" });

        }
        else {
            var newUser = Usuario({
                name: req.body.name,
                password: req.body.password
            });

            newUser.save(function (err, newUser) {
                if (err)
                    res.json({ sucess: false, msg: "Fala" });
                else
                    res.json({ sucess: true, msg: "Sucesso" });

            });

        }
    },
    authenticate: function (req, res) {
        User.findOne({
            name: req.body.name
        }, function (err, user) {
            if (err) throw err
            if (!user) {
                    res.status(403).send({sucess: false, msg: "Falha na autenticação"});
            }
            else
            user.comparePassword(req.body.password, function(err, isMatch){
                if(isMatch && !err){
                    var token = jwt.encode(user, config.secret);
                    res.json({sucess: true, token: token});
                }
                else
                res.status(403).send({sucess: false, msg: "Erro no token"});
            });
        }

        )
    },
    getInfo: function(req, res){
        if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
            var token = req.headers.authorization.split(' ')[1];
            var decodeToken = jwt.decode(token, config.secret);
            return res.json({sucess: true, msg: "Token "+decodeToken.name});

        }
        else
        return res.json({sucess: false, msg: 'No headers'});

    }
}

router.post('/addNew', functions.addNew);
router.post('/authenticate', functions.authenticate);
router.get('/getinfo', functions.getInfo);

module.exports = app => app.use('/usuario', router);