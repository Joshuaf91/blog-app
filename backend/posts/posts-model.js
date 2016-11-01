const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({
  date: Date,
  title: String,
  author: String,
  text: String
});

//First argument is name of model, second argument is schema
const Post = mongoose.model('Post', blogPostSchema);



//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READERS:
//Users
//name
//comments
//email
//password
//date joined
//age