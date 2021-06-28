

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const usuarioSchema = new Schema({

    name: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        unique: true
    }

});

usuarioSchema.pre('save', function(next){
    var user = this;

    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(err);
            };

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next()
            })
        });
    }
    else
        return next()

});

usuarioSchema.methods.comparePassword = function(passw, cb){
    bcrypt.compare(passw, this.password, function(err, isMatch){
        if(err)
            return cb(err);
        
            cb(null, isMatch)

    });
}


const usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = usuario;