import jwt from "jsonwebtoken"
import { serialize } from "cookie"
export default function loginHandler(req,res){
    
    const {user,password}=req.body
    if(user==='admin' && password==='admin'){
        const token=jwt.sign({
            exp:Math.floor(Date.now()/1000)+60*60*24*30,
            user:'admin',
            password:'admin'
        },'secret')
        //primero lo serializamos
        const serialized=serialize("myToken",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:'strict',
            maxAge:1000*60*60*24*30,
            path:'/'
    
        })
        res.setHeader('Set-Cookie',serialized)
        return res.json(user)
    }
    if(user==='usuario' && password==='usuario'){
        const token=jwt.sign({
            exp:Math.floor(Date.now()/1000)+60*60*24*30,
            user:'usuario',
            password:'usuario'
        },'secret')
        //primero lo serializamos
        const serialized=serialize("myToken",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:'strict',
            maxAge:1000*60*60*24*30,
            path:'/'
    
        })
        res.setHeader('Set-Cookie',serialized)
        return res.json(user)
    }
    return res.status(401).json({error:"usuario o contraseña invalida"})
    
}