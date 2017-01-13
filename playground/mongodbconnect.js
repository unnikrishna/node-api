// const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unalbe to connect to mongo Db Server');
  }
  console.log('Connect to mongo db server');
  // db.collection('ToDos').insertOne({
  //   text:'Somethimg text to do',
  //   completed:false
  // },(err, res)=>{
  //   if(err){
  //     return console.log('Somthing eent wrong', err);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined, 2));
  // })
  db.collection('Users').insertOne({
    name:'Unnikrishnan m',
    age:26,
    location:'Sakthikulangara kollam kerala'
  },(err, res)=>{
    if(err){
      return console.log('Somthing eent wrong', err);
    }
    console.log(JSON.stringify(res.ops,undefined, 2));
  })
  db.close();
});
