const express=require("express");
const router=express.Router();

const {
	userById,
	read
}=require('../controllers/user1');
const {requireSignin,isAuth,isAdmin}=require('../controllers/user');

const {generateToken,processPayment}=require("../controllers/braintree")


router.get('/braintree/getToken/:userId',requireSignin,isAuth,generateToken)
router.post('/braintree/payment/:userId',requireSignin,isAuth,processPayment)

router.param('userId',userById)



module.exports=router