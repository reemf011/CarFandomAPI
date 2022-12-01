const customerservice=require(`../services/Customer`);
module.exports.getCustomer= async(req,res)=>{
    try{
        const customer= await customer.findAllProducts();
        res.send({customer});
    }catch(err){
        res.status(500);
        res.send({
            error:err
        });
    }
};