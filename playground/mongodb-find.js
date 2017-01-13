const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unalbe to connect to mongo Db Server');
  }
  console.log('Connect to mongo db server');

     db.collection('ToDos').find().toArray().then((docs)=>{
       console.log('List Of Todos');
       console.log(JSON.stringify(docs, undefined, 2));
     },(err)=>{
       console.log('Unable to fetch');
     });

  db.close();
});
