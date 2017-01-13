// const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unalbe to connect to mongo Db Server');
  }
  console.log('Connect to mongo db server');

  db.collection('ToDos').findOneAndUpdate({
    _id: new ObjectID('5878d596804b2b3a6c4cf851')
  },{
    $set:{
      completed: true
    }
  },
  {
    returnOrginal: false
  }).then((res)=>{
    console.log(res);
  });
});
