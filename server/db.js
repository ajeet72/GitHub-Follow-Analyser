import moongoose from "moongoose";
import { MONGO_URL } from "./.congig";
const moongoose=require(moongoose)

moongoose.connect(MONGO_URL)


const userSchema=new moongoose.Schema({
  userName:{
type:String,
require:true,
maxLength:30,
minLength:3
  }
})


const User=moongoose.model("User",userSchema);


module.exports={
  User
}