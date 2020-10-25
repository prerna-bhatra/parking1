const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema


const productSchema=new mongoose.Schema({
	slots:
	{
		type:Number,
		require:true
		
	},
	updatecode:
	{

		type:String,
		default:"notupdated"
	}
},
{
	timestamps:true
}
);



module.exports=mongoose.model('Product',productSchema);





