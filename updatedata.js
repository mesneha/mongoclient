var mongodb = require('mongodb');

var mongoclient1 = mongodb.MongoClient;

var url =
    'mongodb://localhost:27017/mobile';

mongoclient1.connect(url, 
    function (err, client) {

    if (err) {

        console.log(err)

    }

    else {

        console.log('Connection established ' +
            url);

        var db = client.db('mobile');

        var collection = db.collection('mobiledata');

        var mobtwo = {
                       mobid: 200,
                       mobilename: 'apple',  
                       mobilecost: 2000 };

        var newvalues = { $set: { mobilename:   "Oppo" }};

        collection.updateOne(mobtwo, newvalues, 
            function (err,res)
             {

                if (err)

                    throw err;

                console.log("1 document updated");

                // db.close();

            });

    }



});
































var mongodb=require('mongodb');

var MongoClient=mongodb.MongoClient;
var url='mongodb://localhost/mobile';
MongoClient.connect(url,function(err,client){
if(err){
    console.log(err);
}else{
    console.log('Connection establish....'+url);
    var db=client.db('mobile');
    var collection=db.collection('mobiledata');
   
    collection.update({'mobid':1001},{$set:{'mobname':'iPhone 7','mobcost':700000}},function(err,res){
if(err){
    console.log(err);
}else{
    console.log('Updated Data...'+res);
}
    });
   
}
});
