const User=require('../models/user')

exports.userById=(req,res,next,id)=>
{
	User.findById(id).exec((err,user)=>
	{
		if(err || !user)
		{
			return res.status(400).json({
				error:'User not found'
			})
		}
		req.profile=user;
		next();
	})
}


exports.read=(req,res)=>{
	//req.profile.hashed_password=undefined
	//req.profile.salt=undefined
	return res.json(req.profile)
}

exports.addOrderToUserHIstory=(req,res,next)=>{
	let histroy=[]
	req.body.order.products.forEach((item)=>{
		histroy.push({
			_id:item._id,
			name:item.name,
			description:item.description,
			category:item.category,
			quantity:item.count,
			amount:req.body.order.amount
		})
	})
User.findOneAndUpdate({_id:req.profile._id},
	{$push:{histroy:histroy}},
	{new:true},
	(err,data)=>{
		if(err)
		{
			return res.status(400).json({
				error:"history error"
			})
		}
		next()
	}
	)
}


/*
exports.readproducts=(req,res)=>{

}
*/
/*
exports.update=(req,res)=>{

	User.findByOneAndUpdate({_id:req.profile._id},($set:req.body),{new:true},(err,user)=>{
	
	return res.status(400).json({
	
		if(err)
		{
						error:"You are not autherized to upadte"
		}
		req.profile.hashed_password=undefined
		
	})
	})

	
}

*/