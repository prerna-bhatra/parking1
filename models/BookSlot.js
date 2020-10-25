const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema


const boolSlotSchema=new mongoose.Schema({
	userId:
	{
		type:ObjectId,
		ref:"User"
		
	},
	contact:
	{

		type:Number,
		require:true
	},
	name:
	{
		type:String,
		require:true
		
	},
	duration:
	{
		type:Date,
		require:true
	},
	onDate:
	{
		type:Date,
		require:true
	},
	slotNumber:
	{
		type:Number,
		unique:32
	}
},
{
	timestamps:true
}
);



module.exports=mongoose.model('BookSlot',boolSlotSchema);





