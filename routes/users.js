const express=require("express");
const router=express.Router();

const {signup,signin,signout,requireSignin}=require('../controllers/user');
router.post("/signup",signup);
router.post("/signin",signin);
router.get("/signout",signout);

//auth
router.get('/hello',requireSignin,(req,res)=>
{
	res.send("hello there")
})

/*
router.get("/",(req,res)=>
{
	res.send("users");
})
*/

module.exports=router;