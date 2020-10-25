const BookSlot=require('../models/BookSlot')
exports.create=(req,res)=>
{
	//console.log(req.body.slotNumber.slotNumber)
	//console.log("slot")
	console.log(req.body)
	const bookslot=new BookSlot(req.body)
		bookslot.save((err,data)=>
			{
		if(err)
		{
			return res.status(400).json({
				error:'slot can not booked'
			});

		}
		res.json({data:data})
	})
}
		
exports.slotbuttonfun=(req,res)=>
{
	BookSlot.find()
	.exec()	
	.then((data,err)=>
	{
		if(err)
		{
			return res.status(400).json({
				error:'slot can not booked'
			});

		}
		res.json({data:data})
	})
}

		
exports.myBookings=(req,res)=>
{	
	const userid=req.profile._id;
	console.log(userid)
	BookSlot.find({userId:userid})
	.then((data,err)=>
	{
		if(err)

		{

		}
		console.log(data)
		res.json({data:data})
	})


	
}

	
	exports.FreeSlot=(req,res)=>
{
	const slotnum=req.params.slotnum;
	console.log(slotnum)
	BookSlot.remove({slotNumber:slotnum})
	.exec()	
	.then((data,err)=>
	{
		if(err)
		{
			return res.status(400).json({
				error:'Not Deleted'
			});

		}
		res.json({data:data})
	})
}	

	
	







