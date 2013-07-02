
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Rootzie' });
};

exports.getVegetables = function(req, res){
    res.json([
        {
            "age": 4,
            "title": "Cucumber",
            "location": "SC"
        },
        {
            "age": 1,
            "title": "Watermelon",
            "location": "SC"
        },
        {
            "age": 7,
            "title": "Carrot",
            "location": "NC"
        }
    ]);
};

exports.newVegetable = function(req, res){
    res.json({"Stat": "Successful"});
};