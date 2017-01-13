// const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unalbe to connect to mongo Db Server');
  }
  console.log('Connect to mongo db server');
//DELETE ALL
//   db.collection('ToDos').deleteMany({ text:'third text'}).then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log('Error occured', err);
// })

//DELETEONE
  db.collection('ToDos').deleteOne({ text:'delete one'}).then((res)=>{
  console.log(res);
},(err)=>{
  console.log('Error occured', err);
})

//FINDONEDELETEONE
  db.collection('ToDos').findOneAndDelete({ completed:false}).then((res)=>{
  console.log(res);
},(err)=>{
  console.log('Error occured', err);
})
});
