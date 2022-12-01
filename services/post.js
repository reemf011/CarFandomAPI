const PostModel = require('../models/post');

module.exports.findAllposts = async () => {
    try{
        const posts = await PostModel.find();
        return Employees;


    } catch(err){
    throw new Error("could not retrieve posts");
}
};