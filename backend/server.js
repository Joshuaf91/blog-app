/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');

// an instance of an express server
const app = express();

// links js to mongodb
const mongoose = require('mongoose');



const path = require('path')
const rootPath = path.join(__dirname, '../../')
var bodyParser = require('body-parser');


//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;

//Require in routes:
const routes = require('./index').routes;

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');

//Store connection as variable
const db = mongoose.connection;

//Start the server after successful database connection:
db.on('open', () => {
	console.log("db is up and running");
  // checks these routes sequentialy


    // would like a better understanding of this
  	app.use(bodyParser.urlencoded({ extended: false }));
  


  app.use(express.static('assets'))
  app.use('/posts', routes.posts);
  app.use('*', routes.home);
  //Launch server on port 4444:
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
});

db.on('error', () => {

  console.log("db is down")
 
  app.use((req,res)=>{
  	console.log( "data base down");
  	res.send("database down")
  });
  //Launch server on port 4444:
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
});
