import mongoose from "mongoose"





 const Connection = async(username , password) =>{
    const URL = `mongodb://${username}:${password}@ac-y5tgdc2-shard-00-00.9ljfe3b.mongodb.net:27017,ac-y5tgdc2-shard-00-01.9ljfe3b.mongodb.net:27017,ac-y5tgdc2-shard-00-02.9ljfe3b.mongodb.net:27017/?ssl=true&replicaSet=atlas-j61dfi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{

       await mongoose.connect(URL , { useNewUrlParser:true});
       console.log('database connected successfully');
    }
    catch(error){
        console.log('error while connecting with the database',error);

    }
}

export default Connection;