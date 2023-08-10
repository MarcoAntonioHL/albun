import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './login.module.css'

function FormularioLogin() {
    const {handleSubmit,control,reset}=useForm({
        defaultValues:{
            user:'',
            password:'',        
        }
    })
    const router=useRouter()
    const onSubmit= async(data)=>{
        
        try{
            const response=await axios.post('/api/auth/login',data)
            console.log('respuesta',response)
            reset()
            if(response.data==="usuario"){
                router.push('/Cakes/Cakess')
            }
            if(response.data==="admin"){
                router.push('/Administrador')
            }   
        }
        catch(error){
            console.error(error)
        }
        
    }

    return (
        <Box sx={{width:300,height:300,backgroundColor:'primary.dark'}}>
                <h1 className={styles.titulologin}>Login</h1>   
                <form onSubmit={handleSubmit(onSubmit)}>
                              
                    <Controller
                        name="user"
                        control={control}
                        defaultValues=""
                        render={({field})=><input {...field} placeholder='Nombre'></input>} //field son los valores del cache
                    />
                
                
                    <Controller
                        name="password"
                        control={control}
                        defaultValues=""
                        render={({field})=><input {...field} placeholder='Contraseña' type='password'></input>} //field son los valores del cache
                    />  
                    <Button type='submit' variant='contained'>Ingresar</Button>
                </form>  
        </Box>
    );
}

export default FormularioLogin;