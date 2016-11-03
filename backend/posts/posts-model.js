const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({
  // date: {type: String, required: true},
  title: {type: String, required: true},
  // author: {type: String, required: true},
  // content: {type: String, required: true},
  // categories: {type: String, required: true},
  // comments: {type: String, required: true},
  // description: {type: String, required: true},
  // image: {type: String, required: true}
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