var MongoClient = require("mongodb").MongoClient;
assert = require("assert");
MongoClient.connect('mongodb://localhost:27017/video',function(err,db){
   assert.equal(null,err);
   console.log("Success on connection");
    db.collection('movies').find().toArray(function (mongoError,docs) {
        docs.forEach(function (doc) {
            console.log(doc.title);
        });
        db.close();
    });
    console.log("db closec");
});
