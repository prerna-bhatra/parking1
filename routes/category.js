const express=require("express");
const router=express.Router();

const {create,categoryById,read,list}=require('../controllers/category');

const {requireSignin,isAuth,isAdmin}=require('../controllers/user');
const {userById}=require('../controllers/user1');
router.post("/category/create/:userId",isAdmin,create,requireSignin)
router.get('/category/:categoryId',read)
router.get('/categories',list)
//auth


/*
router.get("/",(req,res)=>
{
	res.send("users");
})
*/
router.param("userId",userById)
router.param("categoryId",categoryById)

module.exports=router;