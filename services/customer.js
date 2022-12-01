const Customermodel=require(`../models/Customer`);
module.exports.findAllProducts= async ()=>{
    try{
        const customer= await Customermodel.find();
        return customer;
    }catch(err){
        throw new Error(`Could not retrieve products`);
    }
}