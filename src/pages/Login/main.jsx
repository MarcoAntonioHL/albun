import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import { Grid } from '@mui/material';

function Login() {
    const {handleSubmit,control,reset}=useForm({
        defaultValues:{
            user:'',
            password:'',        
        }
    })

    const onSubmit=(data)=>{
        console.log(data)
        reset()
    }

    return (
        <>
            
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                name="user"
                                control={control}
                                defaultValues=""
                                render={({field})=><input {...field} placeholder='Nombre'></input>} //field son los valores del cache
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                defaultValues=""
                                render={({field})=><input {...field} placeholder='Contraseña' type='password'></input>} //field son los valores del cache
                            />
                        </Grid>
                    <Button type='submit' variant='primary'>Ingresar</Button>
                    </Grid>
                </form>
                
        </>
    );
}

export default Login;