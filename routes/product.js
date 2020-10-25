const express=require("express");
const router=express.Router();

const {create,read,productById,list,remove,listRelated,listBySearch,photo,listSearch}=require('../controllers/product');

const {requireSignin,isAuth,isAdmin}=require('../controllers/user');
const {userById}=require('../controllers/user1');
router.post("/product/create/:userId",create)//pass admin id in userId
router.delete('/product/:productId/userId',remove)
router.get('/product/:productId',read);
router.get('/products',list)
router.get('/products/related/:productId',listRelated)
router.post('/products/by/search',listBySearch)
router.get('/product/photo/:productId',photo)
router.get('/products/search',listSearch)
//auth


/*
router.get("/",(req,res)=>
{
	res.send("users");
})
*/
router.param("userId",userById)
router.param("productId",productById)

module.exports=router;