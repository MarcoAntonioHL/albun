import { serialize } from 'cookie'
import {verify} from 'jsonwebtoken'
export default function LogoutHandler(req,res){
    const{myToken}=req.cookies
    if(!myToken){
        return res.status(401).json({error:'no Token'})
    }
    try{
        verify(myToken,'secret')
        const serialized=serialize('myToken',null,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:'strict',
            maxAge:0,
            path:'/'
        })
        res.setHeader('Set-Cookie',serialized)
        res.status(200).json("logout succesfully")
    }
    catch(error){
        return res.status(401).json({error:"invalid Token"})
    }
    
}