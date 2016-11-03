/////////////////////////
// Routes for getting and creating (aka posting) blog posts
/////////////////////////

const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPosts = (req, res) => {
  Post.find({}, (err, data) => {
  	console.log(data)
    res.send(data);
  })
}

//Create a new test post in database
const postPosts = (req, res) => {
  console.log(req.body);
  Post.create({title: req.body.post, test: 'sucessfully created a test post'}, (err) => {
  		if(err)console.log("bad request", req.body)
  		else console.log('post successfully created')
  });
}

//Configure router for get and post calls
router.route('/')
  .get(getPosts)
  .post(postPosts)


module.exports = router;
