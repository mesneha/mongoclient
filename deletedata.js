
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/mobile';

MongoClient.connect(url, function (err, client) {

if (err) {

    console.log(err);

} else {

    console.log('Connection establish....' + url);

    var  db = client.db('mobile');

    var  collection = db.collection('mobiledata');

    var mobone = { mobid: 100 };
    var mobtwo = { mobid: 200, mobname: 'Apple', mobcost: 12000 };

    
    collection.remove({mobid:100})
}

});