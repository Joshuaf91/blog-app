const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./posts/posts-model');
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/blog-app-test');

const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Hey from the HOME page');
});

app.get('/posts', (req, res) => {
  res.send('Hey from the POSTS page');
});

db.on('open', () => {
  console.log('db connection opened!');

  app.listen(5555, () => {
    console.log('Listening on port 5555');
    
    Post.create({
        date: 'November 5, 2016',
        title: 'New Post With Joshua',
        author: 'The Devil',
        content: 'Hello! Welcome to the third layer of Hell. Joshua is the President and CEO.', 
        categories: 'hell, joshua fermin, devil, evil',
        comments: "I love this blog",
        description: "This is the first blog about Joshua F.",
        image: "https://s16.postimg.org/tnjfuliv9/trump_thank_you_bigly.jpg"
        }, (err, data) => {
      if(err) console.log('Error with database!');
      else console.log('Post created!');
    })

    setTimeout( () => {Post.find({}, (err, data) => {
              console.log('Database data found!', data);
            })},1)
  });
});
