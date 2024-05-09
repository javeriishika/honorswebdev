import bycrypt from 'bycrypt';

import User from'../model/user.js';

export const signupUser = async(request , response) => { 
    try{

        const salt = await bycrypt.gensalt();
        const hashedPassword = await bycrypt.hash(request.body.password , salt);
         const user = { username: request.body.username, name:request.body.name,password: hashedPassword};

        const newUser =  new User(user);
       await  newUser.save();

       return response.status(200).json({msg: "signup successful"})
    }
    catch (error){
return response.status(500).json({ msg: "error while signup the user"})
    }

}