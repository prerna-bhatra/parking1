const express=require("express");
const router=express.Router();

const {
	userById,
	addOrderToUserHIstory
}=require('../controllers/user1');
const {requireSignin,isAuth,isAdmin}=require('../controllers/user');

const {create,listOrders,manageOrder}=require("../controllers/order")
router.post('/order/manage',manageOrder)
router.post('/order/create/:userId',create,addOrderToUserHIstory)

router.get('/order/list/:userId',listOrders)


router.param('userId',userById)



module.exports=router