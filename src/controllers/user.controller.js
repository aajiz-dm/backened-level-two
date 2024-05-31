import {asyncHandler} from '../utils/asuncHandlesr.js';

const RegisterUser= asyncHandler( async (req,res)=>{

return res.status(200).json({message:"ok"})

} );

export {RegisterUser}