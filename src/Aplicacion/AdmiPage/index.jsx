import { Button } from '@mui/material'
import Input from '@/src/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useRouter} from 'next/router'


export default function AdmiPage() {
    const{handleSubmit,reset,control,formState:{errors}}=useForm(
    )
    const router=useRouter()
    const onSubmit=()=>{
        console.log("consola")

    }
    const LogOut=async()=>{
        try{
            const response=await axios.post('/api/auth/logout')
            console.log(response)
            router.push('/Login')
        }
         catch(error){
            console.error(error)
            router.push('/Login')
         }
        
    }

    
  return (
    <>
        
        <form onSubmit={handleSubmit(onSubmit)}>
               
            
            <Button variant='contained'>Agregar Producto</Button>
            
        </form>
        
    </>
    
  )
}
