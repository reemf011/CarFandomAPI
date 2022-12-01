const {Router}=require(`express`);
const customercontroller=require(`../controllers/customer`);
const customerrouter=Router();
customerrouter.get(`/`,customercontroller,customercontroller.getCustomer);
module.exports=customerrouter;