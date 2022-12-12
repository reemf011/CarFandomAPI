const PostServices = require('../services/Post');

module.exports.getPost = async (req, res) => {
    try{
        const posts = await PostServices.findAllposts();
        res.send({posts});

    } catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }

};

module.exports.postPost = async(req,res)=>{
    const PostInfo ={
        ID: req.body.ID,
        
    };
    try{
        const createdPost = await posts.addNewPost(PostInfo);
        return res.status(201).send({
            msg:'post created successfully',
            postID: createdPost.ID
        });
    }catch(err){
        return res.status(500).send({
            error:err.message 
        });
    }
};