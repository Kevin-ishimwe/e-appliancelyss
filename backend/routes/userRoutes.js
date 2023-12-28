import  express from "express";
import  {createUser} from "../controllers/userControlers.js";


const router =express.Router()

router.get("/",(req,res)=>{
     res.status(200).json({ success: "root" });
})
router.post("/user/add", createUser);

export default router;