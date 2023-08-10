import React from 'react';
import FormularioLogin from '@/src/Aplicacion/login';
import styles from '@/src/styles/Home.module.css';
import ThemeContext from '@/src/context/theme';

function Login() { 
    return (
        <>
            <ThemeContext>
                <div className={styles.main}>  
                    <FormularioLogin/>
                </div>
            </ThemeContext>
        </>
    );
}

export default Login;