const {Router}=require(`express`);
const customercontroller=require(`../controllers/Customer`);
const customerrouter=Router();
customerrouter.get(`/`,customercontroller,customercontroller.getCustomer);
module.exports=customerrouter;