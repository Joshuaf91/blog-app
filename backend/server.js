const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./posts/posts-model');
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/blog-app-test');

const db = mongoose.connection;

db.on('open', () => {
  console.log('db connection opened!');

  app.listen(5555, () => {
    console.log('Listening on port 5555');
    Post.create({title: 'Test post 2'}, (err, data) => {
      if(err) console.log('Error with database!');
      else console.log('Post created!');
    })

    Post.find({}, (err, data) => {
      console.log('Database data found!', data);
    })
  });
});

app.get('/', (req, res) => {
  res.send('Hey from the HOME page');
});

app.get('/posts', (req, res) => {
  res.send('Hey from the POSTS page');
});

