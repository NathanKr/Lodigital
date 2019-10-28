let desc = process.argv[2];
let amount = Number(process.argv[3]);

var  MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let my_db = 'my_budget';
  var dbo = db.db(my_db);
  var myobj = { description : desc, amount : amount };
  dbo.collection("incomes").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});