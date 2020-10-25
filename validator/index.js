exports.userSignupValidator=(req,res)=>
{
	req.check('name','Name is required').notEmpty();
	req.check('email','Email not correct')
	req.check('password','password required').notEmpty()
	const errors=req.validationErrors()
	if(errors)
	{
		const firstEroor=errors.map(error=>error.message[0])
	}	
}