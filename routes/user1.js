const express=require("express");
const router=express.Router();

const {
	userById,
	read
}=require('../controllers/user1');
const {requireSignin,isAuth,isAdmin}=require('../controllers/user');

router.param('userID',userById);

//auth
router.get('/secret/:userID',isAdmin,(req,res)=>
{
	res.json({
		user:req.profile
	});
})


router.get('/user/:userId',read)
/*
update
router.get('/user/userId',read)

*/

/*
router.get("/",(req,res)=>
{
	res.send("users");
})
*/

module.exports=router;