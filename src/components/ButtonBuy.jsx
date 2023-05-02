import React from 'react'
import Button from '@mui/material/Button'

export const ButtonBuy = ({ cake }) => {
    const { title, bill } = cake

    const link = `https://api.whatsapp.com/send?phone=51928751897&text=Hola Tortas Cusco!!%20quisiera%20comprar%20la%20torta%20${title}%20de%20${bill}`
    return (
        <>
            <a href={link} target="_blank">
                <Button
                    sx={{
                        backgroundColor: '#92dad9',
                        color:'#31504F',
                        marginY: 2
                    }}
                    variant="contained"
                    fullWidth
                >
                    Comprar
                </Button>
            </a>
        </>
    )
}
