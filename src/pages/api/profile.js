import { verify } from "jsonwebtoken"

export default function profileHandler(req,res){
    console.log(req.cookies)
    const {myToken}=req.cookies
    try{
        const usuario=verify(myToken,'secret')
        
        return res.json({user:usuario.user,password:usuario.password})
    }
    catch(error){
        return res.status(401),json({error:"token invalido"})
    }
    
    
}