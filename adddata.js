var mongodb = require('mongodb');



var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/mobile';

MongoClient.connect(url, function (err, client) {

    if (err) {

        console.log(err);

    } else {

        console.log('Connection establish....' + url);

        var
            db = client.db('mobile');

        var
            collection = db.collection('mobiledata');

        var
            mobone = { mobid: 100, mobname: 'Samsung', mobcost: 44000 };

        var
            mobtwo = { mobid: 200, mobname: 'Apple', mobcost: 12000 };

        collection.insert([mobone, mobtwo], function (err, res) {

            if (err) {

                console.log(err);

            } else {

                // console.log('Number of rows inserted ' + res.insertedCount);
                
               // console.log('Number of rows inserted ' + res);-this gives 
               //Number of rows inseryed [Object Object]

               
               console.log('Number of rows inserted ' , res);

            }

            client.close();

        });


    }

});










