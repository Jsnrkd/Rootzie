var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/rootzie';
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Rootzie' });
};

exports.getVegetables = function(req, res){
    mongo.Db.connect(mongoUri, function (err, db) {
        db.collection('vegetables', function(er, collection) {
            collection.find().toArray(function(er,rs) {
                res.jsonp(rs);
            });
        });
    });
};

exports.newVegetable = function(req, res){
    mongo.Db.connect(mongoUri, function (err, db) {
        db.collection('vegetables', function(er, collection) {
            collection.insert({"vegType": req.body.vegType, "zip": req.body.zip, "created_on": new Date()}, function(er,rs) {
                res.json({"Stat": "Successful"});
            });
        });
    });
};