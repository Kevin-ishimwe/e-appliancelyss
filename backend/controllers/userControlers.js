import { json } from "react-router-dom";
import User from "../models/userModel.js";
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    res
      .json({
        status: "success",
        message: "new user successfully created",
      })
      .status(200);
  } catch (error) {
    res
      .json({
        status: "error",
        message: error.message,
      })
      .status(403);
  }
};
export const getAllUsers=async(req,res)=>{
    
    const result=await User.find({})
    res.json({
        status:"success",
        body:result
    })

}
