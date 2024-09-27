// Aquí estarán todas las rutas
/*POST /create: Endpoint para crear una publicación. CHEK
GET /: Endpoint para traer todas las publicaciones. CHEK
GET /id/:_id: Endpoint para buscar publicación por id. CHEK
GET /title/:title: Endpoint para buscar una publicación por su titulo.
PUT /id/:_id: Endpoint para actualizar una publicación.
DELETE /id/:_id: Endpoint para eliminar una publicación. CXHEK
*/

const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); 


// crear post
router.post("/create", async(req, res) => {
    try {
        const newPost = await Post.create({...req.body})
        res.status(201).json(newPost)
      } catch (err) {
        console.error("Is not possible to create the post: ", err)
      }
});

// get todos los posts
router.get("/", async(req, res) => {
    try {
        const getPosts = await Post.find()
        res.status(200).json(getPosts)
      } catch (err) {
        console.error("Is not possible to get the posts: ", err)
      }
});

// get post por ID
router.get("/id/:_id", async(req, res) => {
    try {
        const idPost = req.params._id
        const post = await Post.findById(idPost)
        res.status(200).json(post)
      } catch (err) {
        console.error("Is not possible to get the post by ID: ", err)
      }
});

//get post por titulo
router.get("/title/:title", async(req, res) => {
  try {
      const titlePost = req.params.title;
      const post = await Post.find({ title: titlePost }); 
      res.status(200).json(post);
  } catch (err) {
      console.error("Is not possible to get the post by title: ", err);
      res.status(500).send({ message: "Error retrieving the post by title" });
  }
});


//update post id
router.put("/id/:_id", async(req, res) => {
  try {
      const idPost = req.params._id;
      const { title, body } = req.body; 
      
      const post = await Post.findByIdAndUpdate(idPost, {
          title,
          body
      }, { new: true }); 

      res.status(200).json(post);    

  } catch (err) {
      console.error("Is not possible to update the post: ", err);
      res.status(500).send({ message: "Error updating the post" });
  }
});



//eliminar post
router.delete("/id/:_id", async(req, res) => {
    try {
        const idPost = req.params._id
        const deletePost = await Post.findByIdAndDelete(idPost)
        res.json({mensaje: "the post is deleted: ", deletePost})

      } catch (err) {
        console.error("Is not possible to delete the post: ", err)
      }
});


module.exports = router;