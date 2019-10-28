let my_db = 'my_budget';
let MongoClient = require('mongodb').MongoClient;
let url = `mongodb://localhost:27017/${my_db}`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});